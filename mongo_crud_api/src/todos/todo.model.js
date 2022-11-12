const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: {
            createdAt: 'timestamp',
            updatedAt: false
        },
        versionKey: false
    },
);

module.exports = mongoose.model("Todo", todoSchema);
