const {Stage} = require("../schemas/stagesSchemas")
const {Task} = require("../schemas/tasksSchemas")


const getStagesFromDashboard_DB = async (dashboardId) => {

    return await Stage.find({dashboardId: dashboardId})
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
    

    const res = await stageUpdate.save();
    const createdTask = res.tasks[res.tasks.length - 1 ] // necesito retornar la tarea creada con el _id que generó mongoDB
    return createdTask;
}

const deleteTaskFromStage_DB = async (stageId, taskId) => {
    const stageUpdate = await getStageById_DB(stageId);

    console.log(stageId + "  -  "  + taskId)

    stageUpdate.tasks = stageUpdate.tasks.filter( taskIteration => taskIteration._id !== taskId)
    return await stageUpdate.save()
}

const updateTaskFromStage_DB = async (stageId, newData) => {
    if(!newData){
        return {message: "no se pasó el parametro taskID"};
    }

    const stageUpdate = await getStageById_DB(stageId);
    const taskUpdate = stageUpdate.tasks.find(taskIteration => taskIteration._id === newData.taskId);
    
    if(!taskUpdate){
        return {message: "no se encontro la task"};
    }

    if(newData.title){
        taskUpdate.title = newData.title;
    }

    if(newData.description){
        taskUpdate.description = newData.description;
    }

    stageUpdate.tasks = stageUpdate.tasks.map( taskIteration => {
        if(taskIteration._id === taskUpdate._id){
            return taskUpdate
        }
        return taskIteration;
    })
    
    await stageUpdate.save();

    return taskUpdate;
}

const addStage_DB = async (stage) => {
    const newStage = new Stage({
        ...stage
    });
    return await newStage.save();
}

module.exports = {
    getStagesFromDashboard_DB,
    getStageById_DB,
    updateStageById_DB,
    updateTaskFromStage_DB,
    deleteStageById_DB,
    addTaskToStage_DB,
    deleteTaskFromStage_DB,
    addStage_DB
}