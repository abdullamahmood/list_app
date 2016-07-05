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
    task = new Task('go shopping')
  });

// I would like to view a task

  it('can be retrieved', function(){
    expect(toDoList.retrieve()).to.eql([]);
  });

// I would like to store and retrieve a task

  it('stores and retreives tasks', function(){
    toDoList.store(task)
    expect(toDoList.retrieve()[0].name()).to.eql(task.name());
  });

  it('can show when a task is completed', function(){
    toDoList.store(task)
    task.finish()
    expect(toDoList.retrieve()[0].completed()).to.eql(true);
  });

  it('can convert a task to html', function(){
    toDoList.store(task)
    expect(toDoList.toHTML()).to.include('<ul>\n<li><div>go shopping</div></li>\n</ul>')
  });






});
