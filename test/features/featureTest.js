var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDoList = require('../../src/toDoList');
var Task = require('../../src/task')

describe('ToDoList', function(){


  beforeEach(function(){
     toDoList = new ToDoList();
  });

// I would like to view tasks

  it('can be retrieved', function(){
    expect(toDoList.retrieve()).to.eql([]);
  });

// I would like to store a task with a name

  it('stores and retreives tasks', function(){
    toDoList.store('go shopping')
    expect(toDoList.retrieve()[0].name()).to.eql('go shopping');
  });


// I would like to change the status of the task to completed

  it ('changes the status of the task to completed', function(){
    toDoList.finish('hello world')
    expect(toDoList).retrieve('task1')).to.eql('completed');
  });

// I would like to check the status

});
