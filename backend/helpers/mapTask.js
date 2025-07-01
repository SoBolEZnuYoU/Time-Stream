module.exports = function (task) {
    return {
        id: task.id,
        title: task.title,
        createdAt: task.createdAt,
    };
};
