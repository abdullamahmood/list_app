var Task = require('./task');


function ToDoList(){
  this._list = []
};


ToDoList.prototype = {
  retrieve: function(){
    return this._list
  },

  store: function(taskObject){
    this._list.push(taskObject);
  }
};


module.exports = ToDoList
