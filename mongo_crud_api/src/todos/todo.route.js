const express = require("express");
const validate = require("../middleware/validate");
const router = express.Router();
const todoController = require("./todo.controller");
const todoValidation = require("./todo.validation");

router
    .route("/")
    .post(validate(todoValidation.createTodo), todoController.createTodo)
    .get(todoController.getAllTodos);

// router.route("/").get(todoController.getAllArticles);
router
    .route("/:id")
    .get(validate(todoValidation.getTodoById), todoController.getTodoById)
    .put(validate(todoValidation.updateTodo), todoController.updateTodo)
    .delete(validate(todoValidation.deleteTodo), todoController.deleteTodo);
// router
//     .route("/:id")
//     .put(validate(todoValidation.updateTodo), todoController.updateArticle);
// router
//     .route("/:id")
//     .delete(validate(todoValidation.deleteTodo), todoController.deleteArticle);

module.exports = router;
