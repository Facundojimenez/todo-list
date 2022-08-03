
const {getAllTasksService, getTaskByIdService, addTaskService} = require("../services/tasksServices")

const getAllTasks = async (req, res) => {
    const tasks = await getAllTasksService();
    res.json(tasks);
}

const getTaskById = async (req, res) => {
    const id = parseInt(req.params.id); 
    const tasks = await getTaskByIdService(id);
    res.json(tasks);
}

const addTask = async (req, res) => {
    const task = await addTaskService(req.body);
    res.json(task);
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask
}