const fs = require('fs');

const addTodo = (body) => {
  let todos = [];
  let todo = { body };

  todos.push(todo);
  fs.writeFileSync('existing-todos.json', JSON.stringify(todos));

  const existingTodos = fs.readFileSync('existing-todos.json');
  todos = JSON.parse(existingTodos);

};

module.exports = { addTodo };
