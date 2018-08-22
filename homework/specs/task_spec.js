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

  it('should start off as incomplete', function(){
    const actual = task.isComplete
    assert.strictEqual(actual, false)
  })

  it('should be able to be marked as complete', function(){
    task.markAsComplete();
    const actual = task.isComplete;
    assert.strictEqual(actual, true)
  })

})
