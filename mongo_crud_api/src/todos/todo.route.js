const express = require("express");
const validate = require("../middleware/validate");
const router = express.Router();
const todoController = require("./todo.controller");
const todoValidation = require("./todo.validation");

router
    .route("/")
    .post(validate(todoValidation.createTodo), todoController.createTodo)
    .get(todoController.getAllTodos);

router
    .route("/:id")
    .get(validate(todoValidation.getTodoById), todoController.getTodoById)
    .put(validate(todoValidation.updateTodo), todoController.updateTodo)
    .delete(validate(todoValidation.deleteTodo), todoController.deleteTodo);

module.exports = router;
