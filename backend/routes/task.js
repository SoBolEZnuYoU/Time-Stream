const express = require("express");
const {
    addTask,
    deleteTask,
    editTask,
    getTask,
    getTasks,
} = require("../controllers/task");
const mapTask = require("../helpers/mapTask");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    const { tasks, lastPage } = await getTasks(
        req.query.search,
        req.query.limit,
        req.query.page
    );

    res.send({ data: { lastPage, tasks: tasks.map(mapTask) } });
});

router.get("/:id", async (req, res) => {
    const task = await getTask(req.params.id);

    res.send({ data: mapTask(task) });
});

router.post("/", async (req, res) => {
    const newTask = await addTask(req.body.title);

    res.send({ data: mapTask(newTask) });
});

router.patch("/:id", async (req, res) => {
    const updateTask = await editTask(req.params.id, req.body.title);

    res.send({ data: mapTask(updateTask) });
});

router.delete("/:id", async (req, res) => {
    await deleteTask(req.params.id);

    res.send({ error: null });
});

module.exports = router;
