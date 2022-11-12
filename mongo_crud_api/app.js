const express = require('express');
const app = express();
const todoRoutes = require('./src/todos/todo.route');

//middleware
app.use(express.json());


app.use('/todos', todoRoutes);
app.get('/', (req, res) => {
    res.send({message: "Welcome to Aphatheology Todo's API"})
})
app.use('*', (req, res) => {
    res.send({message: "Route Not found"})
})

module.exports = app;

