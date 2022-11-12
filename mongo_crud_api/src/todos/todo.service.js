const Todos = require("./todo.model");

const isTitleTaken = async function (title) {
    const todo = await Todos.findOne({ title });
    return !!todo;
};

const getAllTodos = async (query) => {
    let page = query.page ? Number(query.page) : 1;
    let size = query.size ? Number(query.size) : 10;

    if (isNaN(page)) page = 1;
    if (isNaN(size)) size = 10;
    
    const todos = await Todos.find({})
        .skip(size * (page - 1))
        .limit(size);

    return {
        page: page,
        page_size: todos.length,
        total_count: await Todos.countDocuments(),
        data: todos,
    };
};

const createTodo = async (todoBody) => {
    if (await isTitleTaken(todoBody.title)) {
        throw new Error("Title already exist");
    }
    const todo = await Todos.create(todoBody);
    return todo;
};

const getTodoById = async (todoId) => {
    let todo = await Todos.findById(todoId);

    if (!todo) {
        throw new Error("Todo not found");
    }

    return todo;
};

const updateTodo = async (todoId, todoBody) => {
    let todo = await Todos.findById(todoId);

    if (!todo) {
        throw new Error("Todo not found");
    }

    todo = await Todos.findByIdAndUpdate(todoId, todoBody, {
        new: true,
        runValidators: true,
    });

    return todo;
};

const deleteTodo = async (todoId) => {
    const todo = await Todos.findById(todoId);

    if (!todo) {
        throw new Error("Todo not found");
    }

    await Todos.findByIdAndDelete(todoId);
    return;
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
};
