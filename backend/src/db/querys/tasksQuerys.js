const {Task} = require("../schemas/tasksSchemas")

const getAllTasks_DB = async () => {
    return await Task.find({})
}

const getTaskById_DB = async (id) => {
    return await Task.findById(id)
}

const addTask_DB = async (task) => {
    const newTask = new Task({
        ...task
    });
    return await newTask.save();
}

module.exports = {
    getAllTasks_DB,
    getTaskById_DB,
    addTask_DB
}