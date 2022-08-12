
const {getStageByIdService,getStagesFromDashboardService, addTaskToStageService, deleteTaskFromStageService, updateTaskFromStageService, updateStageByIdService, deleteStageByIdService, addStageService} = require("../services/stagesServices")
const {checkIntegerId} = require("../utils/errorHandling")


const getStagesFromDashboard = async (req, res, next) => {
    try{
        const dashboardId = parseInt(req.query.dashboardId);
        checkIntegerId(dashboardId)
        const stages = await getStagesFromDashboardService(dashboardId);
        res.json(stages);
    }catch(err){
        next(err.message)
    }
}

const getStageById = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id); 
        checkIntegerId(id);
        const stage = await getStageByIdService(id);
        res.json(stage);
    }catch(err){
        next(err.message)
    }
}

const updateStageById = async (req, res, next) => {
    try{    
        const id = parseInt(req.params.id); 
        checkIntegerId(id);
        const newData = req.body;
        const stage = await updateStageByIdService(id, newData);
        res.json(stage);
    }catch(err){
        next(err.message)
    }
}

const updateTaskFromStage = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id); 
        checkIntegerId(id);
        const newData = req.body;
        const stage = await updateTaskFromStageService(id, newData);
        res.json(stage);
    }catch(err){
        next(err.message)
    }
}

const addTaskToStage = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id); 
        checkIntegerId(id);
        const task = req.body;
        const stage = await addTaskToStageService(id, task);
        res.json(stage);
    }catch(err){
        next(err.message)
    }
}

const deleteStageById = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id); 
        checkIntegerId(id)
        const stages = await deleteStageByIdService(id);
        res.json(stages);
    }catch(err){
        next(err.message)
    }
}

const deleteTaskFromStage = async (req, res, next) => {
    try{
        const stageId = parseInt(req.params.id); 
        const taskId = parseInt(req.query.taskId);
        checkIntegerId(stageId)
        checkIntegerId(taskId)
        const stages = await deleteTaskFromStageService(stageId, taskId);
        res.json(stages);
    }catch(err){
        next(err.message)
    }
}

const addStage = async (req, res, next) => {
    try{
        const stage = await addStageService(req.body);
        res.json(stage);
    }catch(err){
        next(err)
    }
}

module.exports = {
    getStagesFromDashboard,
    getStageById,
    addTaskToStage,
    updateStageById,
    updateTaskFromStage,
    deleteStageById,
    deleteTaskFromStage,
    addStage
}