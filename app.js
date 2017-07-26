const fs = require('fs');

let isDone;
let existingTodos;

const addTodo = (body, isDone = false) => {
  let todo = { body, isDone };

  existingTodos = JSON.parse(fs.readFileSync('./existingtodos.json'));

  existingTodos.todos.push(todo);
  fs.writeFileSync('./existingtodos.json', JSON.stringify(existingTodos));
  console.log({existingTodos})

};

module.exports = { addTodo, existingTodos };
