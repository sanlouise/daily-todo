const fs = require('fs');

let isDone;
let existingTodos = JSON.parse(fs.readFileSync('./existingtodos.json'));
let todoId;

const addTodo = (body, isDone = false, todoId) => {
  todoId = existingTodos.todos.length + 1;
  let todo = { body, isDone, todoId };

  existingTodos.todos.push(todo);
  fs.writeFileSync('./existingtodos.json', JSON.stringify(existingTodos));
  console.log({existingTodos})
};

module.exports = { addTodo, existingTodos};
