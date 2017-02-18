'use strict';

const fs = require('fs');

//utf8 encoding specification returns the plain test.
let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

//without the encoding specification a buffer is returned
let greet2 = fs.readFile(__dirname + '/greet.txt', (err, data)=> {
  console.log(data);
});