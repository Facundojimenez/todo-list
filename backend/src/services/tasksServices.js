const {getAllTasks_DB, getTaskById_DB, addTask_DB} = require("../db/querys/tasksQuerys");

const getAllTasksService = async () => {
    return await getAllTasks_DB();
}

const getTaskByIdService = async (id) => {
    return await getTaskById_DB(id);
}

const addTaskService = async (task) => {
   return await addTask_DB(task);
}

module.exports = {
    getAllTasksService,
    getTaskByIdService,
    addTaskService
}