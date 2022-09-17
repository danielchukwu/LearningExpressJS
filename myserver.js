const express = require("express");

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
   console.log("Here");
   res.render('index');
})

app.get('/users', (req, res) => {
   res.send('USERS HOME')
})

app.get('/users/new', (req, res) => {
   res.send('Add new users')
})

app.listen(3000);