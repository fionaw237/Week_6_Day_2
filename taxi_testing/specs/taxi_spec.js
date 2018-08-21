const assert = require('assert');
const Taxi = require('../taxi.js');

let taxi;

describe('Taxi', function(){
  beforeEach(function(){
    taxi = new Taxi('Toyota', 'Prius', 'Fiona')
  });

  it('should have a manufacturer', function(){
    // arrange
    // act
    const actual = taxi.manufacturer;
    // assert
    assert.strictEqual(actual, 'Toyota');
  });

  it('should have a model', function(){
    // arrange
    // act
    const actual = taxi.model;
    // assert
    assert.strictEqual(actual, 'Prius');
  });

  it('should have a driver', function(){
    // arrange
    // act
    const actual = taxi.driver;
    // assert
    assert.strictEqual(actual, 'Fiona')
  })

  describe('Passengers', function(){

    it('should start with no passengers', function(){
      const actual = taxi.passengers;
      assert.deepStrictEqual(actual, [])
    })

    it('should start with zero passenger count', function(){
      const actual = taxi.numberOfPassengers();
      assert.strictEqual(actual, 0)
    })

    it('should be able to add a passenger', function(){
      taxi.addPassenger("Joanna");
      const actual = taxi.numberOfPassengers();
      assert.strictEqual(actual, 1);
    })

    it('should be able to remove passenger by name', function(){
      taxi.addPassenger("Joanna");
      taxi.removePassengerByName("Joanna");
      const actual = taxi.numberOfPassengers();
      assert.strictEqual(actual, 0);
    })

    it('should be able to remove all passengers', function(){
      taxi.addPassenger("Joanna");
      taxi.addPassenger("Louise");
      taxi.removeAllPassengers()
      const actual = taxi.numberOfPassengers()
      assert.strictEqual(actual, 0)
    })

  })

})
