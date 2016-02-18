var fs = require('fs');
var parse = require('csv-parse');
var _ = require('lodash');

function fullName(data) {
  return data[0] + " " + data[1];
}
var parser = parse({delimeter: ','}, function ( error, data ) {
  // var newData = _.map(data, fullName);
  // console.log(newData);
  console.log(data);
});

fs.createReadStream(__dirname+'/sample.csv').pipe(parser);

/* UNIT TESTING */
/* run `npm test` in your terminal */

var chai = require('chai'),
    expect = chai.expect;

describe("fullName", function () {
  it("should return fullname from array of data", function () {
    var dataName = ['Riza', 'Fahmi'];
    expect(fullName(dataName)).equal("Riza Fahmi");
  });
});
