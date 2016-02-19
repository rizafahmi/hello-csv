// Please use async lib https://github.com/caolan/async
'use strict';

const debug = require('debug')('hello');

const fs = require('fs');
const parse = require('csv-parse');
const helper = require('./helper');
const async = require('async');

// 0. Naïve

function naive() {
  fs.readFile(__dirname + '/sample.csv', function thenParse(err, loadedCsv) {

    parse(loadedCsv, function transformEachLine(err, parsed) {

      async.forEach(parsed, function (line) {


        line.push(line[0] + ' ' + line[1]);

        debug(`sending data : ${line}`);

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

      });
    });
  });
}

naive();
