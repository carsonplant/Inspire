//NOTE your service is all set up for the observer pattern but there is still work to be done
import Todo from "../models/todo.js";
// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Carson/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				let todoData = res.data.data.map(t => new Todo(t))
				_setState('todos', todoData)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		let newTodo = new Todo(todo)
		todoApi.post('', newTodo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
		todoApi.delete('' + todoId)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	get Todos() {
		return _state.todos
	}


	numberOfTodos() {
		return _state.todos.length
	}

}
