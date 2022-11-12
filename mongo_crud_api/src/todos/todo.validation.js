const Joi = require("joi");
const { objectId } = require("../utils/custom.validation");

const createTodo = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
    }),
};

const getTodoById = {
    params: Joi.object().keys({
        id: Joi.string().required().custom(objectId),
    }),
};

const updateTodo = {
    params: Joi.object().keys({
        id: Joi.string().required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            title: Joi.string(),
            description: Joi.string(),
        })
        .min(1),
};

const deleteTodo = {
    params: Joi.object().keys({
        id: Joi.string().required().custom(objectId),
    }),
};

module.exports = {
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};
