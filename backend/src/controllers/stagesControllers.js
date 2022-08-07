
const {getAllStagesService, getStageByIdService,getStagesFromDashboardService, addTaskToStageService, deleteTaskFromStageService, updateTaskFromStageService, updateStageByIdService, deleteStageByIdService, addStageService} = require("../services/stagesServices")

const getAllStages = async (req, res) => {
    const stages = await getAllStagesService();
    res.json(stages);
}

const getStagesFromDashboard = async (req, res) => {
    const {dashboardId} = req.query;
    console.log(dashboardId)
    const stages = await getStagesFromDashboardService(dashboardId);
    res.json(stages);
}

const getStageById = async (req, res) => {
    const id = parseInt(req.params.id); 
    const stage = await getStageByIdService(id);
    res.json(stage);
}

const updateStageById = async (req, res) => {
    const id = parseInt(req.params.id); 
    const newData = req.body;
    const stage = await updateStageByIdService(id, newData);
    res.json(stage);
}

const updateTaskFromStage = async (req, res) => {
    const id = parseInt(req.params.id); 
    const newData = req.body;
    const stage = await updateTaskFromStageService(id, newData);
    res.json(stage);
}

const addTaskToStage = async (req, res) => {
    const id = parseInt(req.params.id); 
    const task = req.body;
    const stage = await addTaskToStageService(id, task);
    res.json(stage);
}

const deleteStageById = async (req, res) => {
    const id = parseInt(req.params.id); 
    const stages = await deleteStageByIdService(id);
    res.json(stages);
}

const deleteTaskFromStage = async (req, res) => {
    const stageId = parseInt(req.params.id); 
    const taskId = parseInt(req.query.taskId);
    const stages = await deleteTaskFromStageService(stageId, taskId);
    res.json(stages);
}

const addStage = async (req, res) => {
    const stage = await addStageService(req.body);
    res.json(stage);
}

module.exports = {
    getAllStages,
    getStagesFromDashboard,
    getStageById,
    addTaskToStage,
    updateStageById,
    updateTaskFromStage,
    deleteStageById,
    deleteTaskFromStage,
    addStage
}