var Task = require('./task');

task = new Task()


function toDoList(){
  this._list = []
};


toDoList.prototype = {
  showList: function(){
      return this._list;
  },
  store: function(taskName){
    task = new Task(taskName)
    this._list.push(task);
  }
};


module.exports = toDoList
