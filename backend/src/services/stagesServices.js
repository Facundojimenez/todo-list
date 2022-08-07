const {getAllStages_DB, getStageById_DB, getStagesFromDashboard_DB, deleteStageById_DB, updateStageById_DB,updateTaskFromStage_DB, deleteTaskFromStage_DB, addTaskToStage_DB, addStage_DB} = require("../db/querys/stagesQuerys");

const getStagesFromDashboardService = async (dashboarId) => {
    return await getStagesFromDashboard_DB(dashboarId);
}

const getAllStagesService = async () => {
    return await getAllStages_DB();
}

const getStageByIdService = async (id) => {
    return await getStageById_DB(id);
}

const updateStageByIdService = async (id, newData) => {
    return await updateStageById_DB(id, newData);
}

const updateTaskFromStageService = async (id, newData) => {
    return await updateTaskFromStage_DB(id, newData);
}

const addTaskToStageService = async (stageId, task) => {
    return await addTaskToStage_DB(stageId, task);
}

const deleteStageByIdService = async (id) => {
    return await deleteStageById_DB(id);
}

const deleteTaskFromStageService = async (stageId, taskId) => {
    return await deleteTaskFromStage_DB(stageId, taskId);
}

const addStageService = async (stage) => {
   return await addStage_DB(stage);
}

module.exports = {
    getAllStagesService,
    getStagesFromDashboardService,
    getStageByIdService,
    deleteStageByIdService,
    updateStageByIdService,
    updateTaskFromStageService,
    addTaskToStageService,
    deleteTaskFromStageService,
    addStageService
}