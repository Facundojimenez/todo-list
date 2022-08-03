const {getAllStages_DB, getStageById_DB, deleteStageById_DB, addTaskToStage_DB, addStage_DB} = require("../db/querys/stagesQuerys");

const getAllStagesService = async () => {
    return await getAllStages_DB();
}

const getStageByIdService = async (id) => {
    return await getStageById_DB(id);
}

const addTaskToStageService = async (stageId, task) => {
    return await addTaskToStage_DB(stageId, task);
}

const deleteStageByIdService = async (id) => {
    return await deleteStageById_DB(id);
}

const addStageService = async (stage) => {
   return await addStage_DB(stage);
}

module.exports = {
    getAllStagesService,
    getStageByIdService,
    deleteStageByIdService,
    addTaskToStageService,
    addStageService
}