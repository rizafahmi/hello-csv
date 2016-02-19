'use strict';

const debug = require('debug')('hello');

var readline = require('readline');
var Stream = require('stream');
var fs = require('fs');

const helper = require('./helper');

var instream = fs.createReadStream('./sample.csv');
var outstream = new Stream;

var rl = readline.createInterface(instream, outstream);

rl.on('line', function (line) {

  debug(`sending data: ${line}`);

  helper.sendSms(line, function afterSending(err, sendingStatus) {
    var lineToLog;
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

rl.on('close', function () {
  console.log('Finished.');
});
