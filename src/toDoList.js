(function(exports){

  function ToDoList(){
  this._list = []
  };


    ToDoList.prototype = {
      retrieve: function(){
        return this._list
      },

      store: function(task, taskConstructor = Task){
	       this._list.push(createTask(task, taskConstructor));
	        return this._list;
      },

      toHTML: function() {
        var arrayLength = this._list.length;
        var returnArray = ['<ul>','\n'];
        for (var i = 0; i < arrayLength; i++) {
          returnArray.push(('<li>'+ this._list[i].name() + '</li>' + '\n'));
          }
          returnArray.push('</ul>');
        return returnArray.join("");
      }


    }
      function createTask(task, taskConstructor) {
	      return new taskConstructor(task);
	    }
    exports.ToDoList = ToDoList;

})(this);



// store: function(task, taskString){
//   this._list.push(new ToDoList(taskString));
// },
