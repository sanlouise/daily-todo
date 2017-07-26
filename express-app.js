const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mustacheExpress = require('mustache-express');
const appHelper = require('./app');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustacheExpress());
app.set('views', './templates');
app.set('view engine', 'mustache');

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.get('/', (request, response) => {
  response.render('home', appHelper.readTodos());
  console.log(appHelper)
  console.log("HEY" + appHelper.readTodos());
})

app.post('/create', (request, response) => {
  const toDoItem = request.body.todo;
  appHelper.addToDo(toDoItem);
  response.redirect('/');
});

app.post('/complete/:id', (request, response) => {
  const todoId = parseInt(request.params.id);
  console.log(todoId);
  appHelper.toggleTodo(todoId);
  response.redirect('/');
});
