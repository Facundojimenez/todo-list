import Axios from "axios"
import config from "./config"

const createTaskFromStage = async (taskData) => {
        const res = await Axios.post(config.BACKEND_BASE_API_URL + `/stages/addTask/${taskData.stageId}`, taskData);
        return res;
}

export {
    createTaskFromStage
};