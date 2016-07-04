var Task = require('./task');

task = new Task()


function ToDoList(){
  this._list = []
};


ToDoList.prototype = {
  retrieve: function(){
      return this._list;
  },
  store: function(taskName){
    task1 = new Task(taskName)
    this._list.push(task1);
  }
};


module.exports = ToDoList
