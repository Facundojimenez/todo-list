import Axios from "axios"
import config from "./config"

const createTaskFromStage = async (taskData) => {
    const res = await Axios.post(config.BACKEND_BASE_API_URL + `/stages/addTask/${taskData.stageId}`, taskData);
    return res.data;
}

const createStageFromDashboard = async (stageData) => {
    const res = await Axios.post(config.BACKEND_BASE_API_URL + `/stages`, stageData);
    return res.data;
}

const createDashboardFromUser = async (dashboardData) => {
    const res = await Axios.post(config.BACKEND_BASE_API_URL + `/users/addDashboard/${dashboardData.userId}`, dashboardData);
    return res.data;
}

export {
    createTaskFromStage,
    createStageFromDashboard,
    createDashboardFromUser
};