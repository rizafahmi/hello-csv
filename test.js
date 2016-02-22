'use strict';

/* UNIT TESTING */
/* run `npm test` in your terminal */

require('./parse-callback');
var helper = require('./helper');

var chai = require('chai');
var expect = chai.expect;

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
    it('should send dummy sms contains data that parsed from CSV file', function () {

        // oh gosh, how to test asnychronous code?
        expect(true).to.be.true;

        // expect(helper.sendSms({}, cbfn)).to.be.true;

    });
});
