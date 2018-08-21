const assert = require('assert');
const Hero = require('../hero.js');

let hero;

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('Spiderman', 'Pizza', ['task 1', 'task 2'])
  });

  it('should have a name', function(){
    const actual = hero.name
    assert.strictEqual(actual, 'Spiderman')
  });

  it('should start with full health', function(){
    const actual = hero.health
    assert.strictEqual(actual, 100)
  })

  it('should have a favourite food', function(){
    const actual = hero.fav_food
    assert.strictEqual(actual, 'Pizza')
  })

  it('should be able to say their name', function(){
    const actual = hero.sayName()
    assert.strictEqual(actual, "Hi! My name is Spiderman.")
  })

  it('should have tasks to complete', function(){
    const actual = hero.tasks.length
    assert.strictEqual(actual, 2)
  })

})
