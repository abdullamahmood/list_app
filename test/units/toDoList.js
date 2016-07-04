var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDoList = require('../../src/toDoList');

describe('toDoList', function(){

  beforeEach(function (){
    toDoList = new ToDoList();
  });

  describe('#retrieve', function(){
    it('retreives an empty array', function(){
      expect(toDoList.retrieve()).to.eql([]);
    });
  });
  
  describe('#store', function(){
    it('adds an object to the list', function(){
      toDoList.store('A task')
      expect(toDoList.retrieve()).to.not.eql([]);
    });
  });
});
