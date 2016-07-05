var Task = require('./task');




var task;


function ToDoList(){
  this._list = []
};


ToDoList.prototype = {
  retrieve: function(){
    return this._list
  },

  store: function(taskObject){
    this._list.push(taskObject);
  },

  toHTML: function() {
		var arrayLength = this._list.length;
		var returnArray = ['<ul>','\n'];
		for (var i = 0; i < arrayLength; i++) {
  	returnArray.push(('<li>'+ '<div>' + this._list[i].name() + '</div>'+ '</li>' + '\n'));
		}
		returnArray.push('</ul>');
		return returnArray.join("");
	},

};


module.exports = ToDoList
