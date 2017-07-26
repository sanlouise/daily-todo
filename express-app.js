const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mustacheExpress = require('mustache-express');
const addTodo = require('./app')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/', function(req, res){
  res.render('home');
});
