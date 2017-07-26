const fs = require('fs');

let isDone;

const addTodo = (body, isDone = false) => {
  let todo = { body, isDone };
  let todos = [];

  todos.push(todo);
  fs.writeFileSync('existing-todos.json', JSON.stringify(todos));

  const existingTodos = fs.readFileSync('existing-todos.json');
  todos = JSON.parse(existingTodos);

};

module.exports = { addTodo };
