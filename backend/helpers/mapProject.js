module.exports = function (project) {
    return {
        id: project.id,
        title: project.title,
        tasks: project.tasks,
        createdAt: project.createdAt,
    };
};
