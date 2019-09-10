import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let todo = _todoService.Todos
	let template = ''
	todo.forEach(todo => {
		template += todo.getTemplate()
	})
	document.getElementById("todos").innerHTML = template
	document.getElementById("todo-create").innerHTML = ` 
				<form onsubmit="app.controllers.todoController.addTodo(event)">
				<input name="description" type="text" class="form-control" placeholder="${_todoService.numberOfTodos()} Todos">
				<button class="btn btn-success" type="submit">Add Todo</button>
				</form>	
	`
}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)

		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		_todoService.addTodo(todo)
		form.reset()
	}


	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}
