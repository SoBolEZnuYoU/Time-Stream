const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
        },
        tasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProjectTask",
            },
        ],
    },
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
