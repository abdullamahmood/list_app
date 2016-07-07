var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var ToDoList = require('../../src/toDoList.js').ToDoList;

describe('ToDoList', function() {

  var Stub = sinon.stub();
  Stub.withArgs('phone grandma').returns({ _name: 'phone grandma', _complete: false });
  Stub.withArgs('eat chocolate').returns({ _name: 'eat chocolate', _complete: false });


  it('should print a list of items', function() {
    var toDoList = new ToDoList();
    toDoList.store('phone grandma', Stub);
    toDoList.store('eat chocolate', Stub);
    expect(toDoList._list[0]._name).to.equal('phone grandma');
    expect(toDoList._list[1]._name).to.equal('eat chocolate');
  });

  it('can convert a task to html', function(){
    var toDoList = new ToDoList();
    toDoList.store('go shopping', Stub);
    expect(toDoList.toHTML()).to.include('<ul>\n<li>go shopping</li>\n</ul>')
  });
});















// var ToDoList = require('../../src/toDoList').ToDoList;
// // var Task = require('../../src/task').Task;
// var sinon = require('sinon');
// var assert = require('chai').assert;
// var expect = require('chai').expect;
//
// describe('ToDoList', function(){
//
//
//   var Stub = sinon.stub();
//     Stub.withArgs('go shopping').returns({ _item: 'go shopping', _complete: false });
//     Stub.withArgs('eat breakfast').returns({ _item: 'eat breakfast', _complete: false });
//
//       it('should print a list of items', function() {
//       var toDoList = new ToDoList();
//       toDoList.store('go shopping', Stub);
//       toDoList.store('go shopping', Stub);
//       expect(toDoList.retrieve[0]._item).to.equal('go shopping');
//       expect(toDo.retrieve[1]._item).to.equal('eat breakfast');
//     });
//     });




//
// beforeEach(function(){
//   toDoList = new ToDoList();
// });


// it('can be retrieved', function(){
//   expect(toDoList.retrieve()).to.eql([]);
// });
//
// it('stores and retreives tasks', function(){
//   toDoList.store(task, 'go shopping')
//   expect(toDoList.retrieve()[0].name()).to.eql(task.name());
// });
//
// it('can show when a task is completed', function(){
//   toDoList.store(task, 'go shopping')
//   task.finish()
//   expect(toDoList.retrieve()[0].completed()).to.eql(true);
// });
