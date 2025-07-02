const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { register, login } = require("./controllers/user");
const {
    addTask,
    deleteTask,
    editTask,
    getTask,
    getTasks,
} = require("./controllers/task");
const {
    getProjects,
    getProject,
    addProject,
    editProject,
    deleteProject,
} = require("./controllers/project");
const mapUser = require("./helpers/mapUser");
const mapTask = require("./helpers/mapTask");
const mapProject = require("./helpers/mapProject");
const authenticated = require("./middlewares/authenticated");
const {
    addProjectTask,
    deleteProjectTask,
} = require("./controllers/projectTask");

const port = 3001;
const app = express();

app.use(cookieParser);
app.use(express.json());

app.post("/register", async (req, res) => {
    try {
        const { user, token } = await register(
            req.body.login,
            req.body.password
        );

        res.cookie("token", token, { httpOnly: true }).send({
            error: null,
            user: mapUser(user),
        });
    } catch (e) {
        res.send({ error: e.message || "Unknown error" });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { user, token } = await login(req.body.login, req.body.password);

        res.cookie("token", token, { httpOnly: true }).send({
            error: null,
            user: mapUser(user),
        });
    } catch (e) {
        res.send({ error: e.message || "Unknown error" });
    }
});

app.post("/logout", async (req, res) => {
    res.cookie("token", "", { httpOnly: true }).send({});
});

app.get("/tasks", async (req, res) => {
    const { tasks, lastPage } = await getTasks(
        req.query.search,
        req.query.limit,
        req.query.page
    );

    res.send({ data: { lastPage, tasks: tasks.map(mapTask) } });
});

app.get("/tasks/:id", async (req, res) => {
    const task = await getTask(req.params.id);

    res.send({ data: mapTask(task) });
});

app.post("/tasks", async (req, res) => {
    const newTask = await addTask(req.body.title);

    res.send({ data: mapTask(newTask) });
});

app.patch("/tasks/:id", async (req, res) => {
    const updateTask = await editTask(req.params.id, req.body.title);

    res.send({ data: mapTask(updateTask) });
});

app.delete("/tasks/:id", async (req, res) => {
    await deleteTask(req.params.id);

    res.send({ error: null });
});

app.use(authenticated);

app.get("/projects", async (req, res) => {
    const { projects, lastPage } = await getProjects(
        req.query.search,
        req.query.limit,
        req.query.page
    );

    res.send({ data: { lastPage, projects: projects.map(mapProject) } });
});

app.get("/projects/:id", async (req, res) => {
    const project = await getProject(req.params.id);

    res.send({ data: mapProject(project) });
});

app.post("/projects", async (req, res) => {
    const newProject = await addProject(req.body.title);

    res.send({ data: mapProject(newProject) });
});

app.patch("/projects/:id", async (req, res) => {
    const updateProject = await editProject(req.params.id, req.body.title);

    res.send({ data: mapProject(updateProject) });
});

app.delete("/projects/:id", async (req, res) => {
    await deleteProject(req.params.id);

    res.send({ error: null });
});

app.post("/projects/:id/tasks", async (req, res) => {
    const newProjectTask = await addProjectTask(req.params.id, {
        title: req.body.title,
        status: false,
    });

    res.send({ data: newProjectTask });
});

app.delete("/projects/:projectId/tasks/:taskId", async (req, res) => {
    await deleteProjectTask(req.params.projectId, req.params.taskId);

    res.send({ error: null });
});

mongoose
    .connect(
        "mongodb://Semen:mongopass@localhost:27017/Time-Stream?authSource=admin"
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    });
