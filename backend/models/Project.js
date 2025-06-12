const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        tasks: {
            type: Object,
            required: true,
        },
        comment: {
            type: String,
            default: roles.USER,
        },
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
