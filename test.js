'use strict';

/* UNIT TESTING */
/* run `npm test` in your terminal */

require('./parse-callback');
var helper = require('./helper');

var chai = require('chai');
var expect = chai.expect;

function check(done, f) {
    try {
        f();
        done();
    } catch (e) {
        done(e);
    }
}

describe('naive', function () {
    it('should be true', function () {
        expect(true).to.be.true;
    });
});

describe('getFullName', function () {
    it('should return fullname from firstName and lastName given', function () {
      var firstName = 'Riza';
      var lastName = 'Fahmi';
      expect(helper.getFullName(firstName, lastName)).equal('Riza Fahmi');
  });
});

describe('sendSms', function () {
    it('should send dummy sms contains data that parsed from CSV file', function (done) {

        // oh gosh, how to test asnychronous code?
        setTimeout(function () {
            let data = {
                data: 'Some dummy data',
            };

            helper.sendSms(data, function (err, sendingStatus) {
                check(done, function () {
                    expect(sendingStatus.status).to.equal(200);
                    expect(sendingStatus.message).to.equal('OK');
                });

                if (err) throw err;
            });
        }, 600);

    });
});

describe('logToS3', function () {
    it('should run S3 emulator to send log data', function (done) {
        setTimeout(function () {
            let data = {
                data: 'Some dummy data to log to S3',
            };

            helper.logToS3(data, function (err, sendingStatus) {
                check(done, function () {
                    expect(sendingStatus.logged).to.be.true;
                });

                if (err) throw err;
            });
        }, 600);

    });

});
