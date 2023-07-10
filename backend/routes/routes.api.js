const router = require("express").Router();

const subtaskApi = require("../modules/subtasks/subtask.routes.api");
const todoApi = require("../modules/todos/todo.routes.api");

router.use("/subtasks", subtaskApi);
router.use("/todos", todoApi);

module.exports = router;
