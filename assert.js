var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
//assert( expected === 4, 'one plus two is three');
assert(expected != 3, 'one plus two is three');
assert.ok(expected != 3, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');


