const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        spendTime: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
