var assert = require('assert');
var cool = require(process.argv[2]);
assert(cool(42) === true, 'isCoolNumber(42) should be true');
