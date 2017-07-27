const fs = require('fs');

let existingToDos = JSON.parse(fs.readFileSync('./existingtodos.json', 'utf8')), isChecked, id;

const writeTodos = () => {
  fs.writeFileSync('./existingtodos.json', JSON.stringify(existingToDos));
}

const readTodos = () => {
  return JSON.parse(fs.readFileSync('./existingtodos.json').toString());
}

const addToDo = (body, isChecked = "unchecked", id = existingToDos.todos.length + 1) => {
  let todo = { id, body, isChecked };
  existingToDos.todos.push(todo);
  writeTodos();
}

const toggleTodo = (todoId) => {
  let currentTodo = existingToDos.todos.find(todo => todo.id === todoId );
  currentTodo.isChecked = currentTodo.isChecked === "checked" ? "unchecked" : "checked";
  writeTodos();
}

module.exports = { addToDo, existingToDos, readTodos, toggleTodo };
