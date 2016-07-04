var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDoList = require('../../src/toDoList');

describe('toDoList', function(){

  beforeEach(function (){
    toDoList = new ToDoList();
  });

  describe('#showList', function(){
    it('retreives an empty array by default', function(){
      expect(toDoList.showList()).to.eql([]);
    });
  });

  describe('#store', function(){
    it('adds an object to the list', function(){
      toDoList.store('A task')
      expect(toDoList.showList()).to.not.eql([]);
    });
  });

  describe('#finish', function(){
    xit('changes a task to completed', function(){
      toDolist.finish()
      expect(toDoList.retrieve('A task')).to.eql('completed');
    });
  });

  describe('#retrieve', function(){

  });
});
