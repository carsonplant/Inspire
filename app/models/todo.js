

export default class Todo {
  constructor(data) {
    this._id = data._id || data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  getTemplate() {
    if (this.completed) {
      return `	<button class="btn btn-danger" id="delete"
		onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>`
    } else {
      return `<li style="text-shadow: 2px 2px black; color: white" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">${this.description}</li>`
    }
  }
}
