// var ToDoItem = require("../models/toDoItem");

(function(exports){

  function ToDoList() {
    this.tasks = [];
  }

  ToDoList.prototype.addTask = function(ToDoItem, taskString) {
    this.tasks.push(new ToDoItem(taskString));
    console.log(this.tasks)
  };

  ToDoList.prototype.display = function() { debugger;
    var returnString = "<ul>";
    this.tasks.forEach(function(taskItem) {
      returnString += ("<li><div>"+taskItem.task+"</div></li>");
    });
    return returnString += "</ul>";
  };

  exports.ToDoList = ToDoList;

})(this);