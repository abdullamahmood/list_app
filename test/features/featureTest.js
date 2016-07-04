// I would like to add a task to the list

// I would like to store a task
//
// I would like to retrieve the task from the list

// I would like to change the status of the task to completed
//
// I would like to check the status

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
  //
  // it ('changes the status of the task to completed', function(){
  //   toDoList.complete('task1')
  //   expect(toDoList.('task1')).to.eql('completed')
  // });




});
