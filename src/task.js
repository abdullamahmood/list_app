function Task(name){
  this._name = name
  this._completed = false
};

Task.prototype = {
  completed: function(){
    return this._completed;
  },
  name: function(){
    return this._name;
  }
 };

module.exports = Task
