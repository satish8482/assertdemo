var assert = require('assert');

/*var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5,6];

assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"john", "age":"21" };

//deepEqual checks the elements in the objects are identical
assert.deepEqual(person1, person2, 'these two objects are the not same');
*/





/*assert.doesNotThrow(
  function() {
    console.log("Nothing to see here");
  },
  Error
);
*/
assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error
);