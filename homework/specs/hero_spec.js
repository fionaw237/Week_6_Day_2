const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js')
const Task = require('../task.js')
const Rat = require('../rat.js')

let hero;
let task1;
let task2;
let task3;

describe('Hero', function(){
  beforeEach(function(){
    task1 = new Task(9, 4, 100);
    task2 = new Task(4, 8, 40);
    task3 = new Task(7, 2, 35);
    hero = new Hero('Spiderman', 'Pizza', [task1, task2, task3])
  });

  it('should have a name', function(){
    const actual = hero.name
    assert.strictEqual(actual, 'Spiderman')
  });

  it('should start with full health', function(){
    const actual = hero.health
    assert.strictEqual(actual, 100)
  });

  it('should have a favourite food', function(){
    const actual = hero.fav_food
    assert.strictEqual(actual, 'Pizza')
  });

  it('should be able to say their name', function(){
    const actual = hero.sayName()
    assert.strictEqual(actual, "Hi! My name is Spiderman.")
  });

  it('should have tasks to complete', function(){
    const actual = hero.tasks.length
    assert.strictEqual(actual, 3)
  });

  // could add another describe here - e.g. describe('Hero and food')

  it('should be able to eat food and gain health', function(){
    burger = new Food('Burger', 10)
    hero.eatsFood(burger)
    actual = hero.health
    assert.strictEqual(actual, 110)
  });

  it('should be able to eat favourite food and gain more health', function(){
    pizza = new Food('Pizza', 10)
    hero.eatsFood(pizza)
    actual = hero.health
    assert.strictEqual(actual, 115)
  });

  it('should be able to add a task', function(){
    hero = new Hero('Spiderman', 'Pizza', [])
    task4 = new Task(2, 2, 35);
    hero.addTask(task4)
    actual = hero.tasks.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to sort tasks by difficulty', function(){
    // my initial try
    // hero.sortTasksByDifficulty()
    // difficulties = []
    // for (task of hero.tasks) {
    //   difficulties.push(task.difficulty)
    // };
    // const actual = difficulties
    // assert.deepStrictEqual(actual, [9, 7, 4])

    // suggested in hwork review
    hero.sortTasks("difficulty");
    assert.deepStrictEqual(hero.tasks, [task1, task3, task2]);
  });

  it('should be able to sort tasks by urgency', function(){
    // hero.sortTasksByUrgency()
    // urgencies = []
    // for (task of hero.tasks) {
    //   urgencies.push(task.urgency)
    // };
    // const actual = urgencies
    // assert.deepStrictEqual(actual, [8, 4, 2])
    hero.sortTasks("urgency")
    assert.deepStrictEqual(hero.tasks, [task2, task1, task3])
  });

  it('should be able to sort tasks by reward', function(){
    // hero.sortTasksByReward()
    // rewards = []
    // for (task of hero.tasks) {
    //   rewards.push(task.reward)
    // };
    // const actual = rewards
    // assert.deepStrictEqual(actual, [100, 40, 35])
    hero.sortTasks("reward")
    assert.deepStrictEqual(hero.tasks, [task1, task2, task3])
  });

  it('should be able to view completed tasks', function(){
    task1.markAsComplete()
    const actual = hero.viewCompletedTasks()
    assert.deepStrictEqual(actual, [task1])
  });

  it('should be able to view imcomplete tasks', function(){
    task1.markAsComplete()
    const actual = hero.viewIncompleteTasks()
    assert.deepStrictEqual(actual, [task2, task3])
  });

  it('should lose health if food is poisonous', function(){
    pizza = new Food('Pizza', 10)
    rat = new Rat("Merlin")
    rat.touchFood(pizza)
    hero.eatsFood(pizza)
    actual = hero.health
    assert.strictEqual(actual, 90)
  })

})
