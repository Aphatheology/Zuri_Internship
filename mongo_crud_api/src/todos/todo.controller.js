const todoService = require("./todo.service");
const catchAsync = require("../utils/catchAsync");

const getAllTodos = catchAsync(async (req, res) => {
    const todos = await todoService.getAllTodos(req.query);
    res.send(todos);
});

const createTodo = catchAsync(async (req, res) => {
    const todo = await todoService.createTodo(req.body);
    res.status(201).send(todo);
});

const getTodoById = catchAsync(async (req, res) => {
    const todo = await todoService.getTodoById(req.params.id);
    res.send(todo);
});

const updateTodo = catchAsync(async (req, res) => {
    const todo = await todoService.updateTodo(req.params.id, req.body);
    res.send(todo);
});

const deleteTodo = catchAsync(async (req, res) => {
    await todoService.deleteTodo(req.params.id);
    res.status(204).send();
});

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
};
