// please use promise approach to fight the naive one in parse-callback.js

'use strict';

const debug = require('debug')('hello');

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const parse = require('csv-parse');
const helper = require('./helper');

// 0. Naïve

function naiveWithPromise() {

  fs.readFileAsync(__dirname + '/sample.csv').then(function (loadedCsv) {

    parse(loadedCsv, function transformEachLine(err, parsed) {

      for (let index in parsed) {

        let line = parsed[index];

        line.push(line[0] + ' ' + line[1]);

        if (index > 0) {
          debug(`sending data index: ${index - 1}`);

          helper.sendSms(line, function afterSending(err, sendingStatus) {
            let lineToLog;
            if (err) {
              debug(err.message);

              lineToLog = {
                sendingStatus,
                line,
              };

            }

            if (lineToLog) {
              helper.logToS3(lineToLog, function afterLogging(err, loggingStatus) {
                if (err) {
                  debug(err.message);
                }
              });
            }
          });
        }

        index++;
      }
    });
  });

}

naiveWithPromise();
