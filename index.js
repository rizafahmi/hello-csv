var fs = require('fs');
var parse = require('csv-parse');

var parser = parse({delimeter: ','}, function ( error, data ) {
  console.log(data);
});

fs.createReadStream(__dirname+'/sample.csv').pipe(parser);
