const {Stage} = require("../schemas/stagesSchemas")
const {Task} = require("../schemas/tasksSchemas")

const getAllStages_DB = async () => {
    return await Stage.find({})
}

const getStageById_DB = async (id) => {
    return await Stage.findById(id)
}

const updateStageById_DB = async (id, newData) => {
    const stageUpdate = await getStageById_DB(id);

    if(!stageUpdate){
        return {message: "no se encontro el stage"};
    }

    if(newData.order){
        stageUpdate.order = newData.order
    }

    if(newData.title){
        stageUpdate.title = newData.title
    }


    return await stageUpdate.save();
}

const deleteStageById_DB = async (id) => {
    return await Stage.findByIdAndDelete(id)
}

const addTaskToStage_DB = async (stageId, task) => {
    const newTask = new Task({
        ...task
    });
    ///me traigo el stage, le agrego la tarea y lo guardo de nuevo
    const stageUpdate = await getStageById_DB(stageId);
    stageUpdate.tasks.push(newTask);
    return await stageUpdate.save()
}

const addStage_DB = async (stage) => {
    const newStage = new Stage({
        ...stage
    });
    return await newStage.save();
}

module.exports = {
    getAllStages_DB,
    getStageById_DB,
    updateStageById_DB,
    deleteStageById_DB,
    addTaskToStage_DB,
    addStage_DB
}