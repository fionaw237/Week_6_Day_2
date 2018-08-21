const assert = require('assert');
const Rat = require('../rat.js');

let rat;

describe("Rat", function(){

  it('should have a name', function(){
    rat = new Rat("Merlin")
    const actual = rat.name
    assert.strictEqual(actual, "Merlin")
  });

})
