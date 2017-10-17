// define a simple function with callback(err, value)
/*function sayHello(name, callback) {
  var error = false;
  var str   = "Hello "+name;
  callback(error, str);
}

// use the function
sayHello('World', function(err, value){
  assert.ifError(err);
  assert.equal(value, "Hello World");
})
*/





const assert = require('assert');

assert.ifError(0);
// OK
//assert.ifError(1);
// Throws 1
//assert.ifError('error');
// Throws 'error'
//assert.ifError(new Error());
// Throws Error