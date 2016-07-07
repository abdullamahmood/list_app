var toDoList =  new ToDoList();
// var toDoItem = new ToDoItem();

var updateList = function() {
	document.getElementById('list').innerHTML = toDoList.display();
};

// toDoList.addTask(ToDoItem, "Go shopping");
// updateList();
// toDoList.addTask(ToDoItem, "Make lunch");
// updateList();

var el = document.getElementById('addTask')


el.addEventListener('click', addTask, false);

function addTask(evt){
	evt.preventDefault();
	
	if (el.textInput.value) {
		toDoList.addTask(ToDoItem, el.textInput.value);
		updateList();
		document.getElementById('addTask').reset();
	}
};
	
  // console.log(el.textInput.value);
