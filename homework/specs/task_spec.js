const assert = require('assert');
const Task = require('../task.js');

let task;

describe('Task', function(){

  beforeEach(function(){
    task = new Task(3, 5, 'chocolate')
  });

  it('should have a difficulty level', function(){
    const actual = task.difficulty
    assert.strictEqual(actual, 3)
  });

  it('should have an urgency level', function(){
    const actual = task.urgency
    assert.strictEqual(actual, 5)
  });

  it('should have a reward', function(){
    const actual = task.reward
    assert.strictEqual(actual, 'chocolate')
  });

  it('should start off being marked as not completed', function(){
    const actual = task.completed
    assert.strictEqual(actual, false)
  })

})
