'use strict';

/* UNIT TESTING */
/* run `npm test` in your terminal */

require('./parse-callback');
var helpers = require('./helper');

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
      expect(helpers.getFullName(firstName, lastName)).equal('Riza Fahmi');
  });
});
