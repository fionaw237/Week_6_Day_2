const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

let rat;
let food;

describe("Rat", function(){
  beforeEach(function(){
    rat = new Rat("Merlin");
    food = new Food('Pizza', 10)
  })

  it('should have a name', function(){
    const actual = rat.name
    assert.strictEqual(actual, "Merlin")
  });

  it('should be able to touch food and make it poisonous', function(){
    rat.touchFood(food)
    const actual = food.isPoisonous
    assert.strictEqual(actual, true)
  });

})
