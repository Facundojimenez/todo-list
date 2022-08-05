import Axios from "axios"
import config from "./config"

const updateTaskFromStage = async (taskData) => {
    console.log(taskData)
        const res = await Axios.put(config.BACKEND_BASE_API_URL + `/stages/updateTask/${taskData.stageId}`, taskData);
        return res.data;
}

const updateStageFromDashboard = async (stageData) => {
    console.log(stageData)
    const res = await Axios.put(config.BACKEND_BASE_API_URL + `/stages/update/${stageData._id}`, stageData);
    return res.data;
}

export {
    updateTaskFromStage,
    updateStageFromDashboard
};