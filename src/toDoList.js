var Task = require('./task');

task = new Task()


function ToDoList(){
  this._list = []
};


ToDoList.prototype = {
  retrieve: function(){
    return this._list.forEach(getNames);
    function getNames(element, index, array) {
      console.log('============1')
      console.log(element.name())
    }
  },

  store: function(taskName){
    task1 = new Task(taskName)
    this._list.push(task1);
  }

  // complete: function(task){
  //
  // }
};


module.exports = ToDoList
