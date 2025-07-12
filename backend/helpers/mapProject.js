module.exports = function (project) {
    return {
        id: project.id,
        title: project.title,
        comment: project.comment,
        tasks: project.tasks,
        createdAt: project.createdAt,
    };
};
