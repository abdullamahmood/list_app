// // window.onload = function() {
	var toDoList = new ToDoList()
	task = new Task('go shopping')
	console.log(task)
	toDoList.store(task)


// 	//
//
//
//
	var updateList = function(){
		 document.getElementById('list').innerHTML = toDoList.toHTML()
	}
//

	// var el = document.getElementById('form')
	// 	el.addEventListener('click', function(evt){
	// 	evt.preventDefault();
	// })


	document.getElementById('submit').addEventListener('click', addTask, false);
	function addTask(evt){
			evt.preventDefault();
			// toDoList.store(new Task('go shopping'))
			toDoList.store(document.getElementById('task-input').value);
			updateList()
			document.getElementById('form').reset();
		};

// }
