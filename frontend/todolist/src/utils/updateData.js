import Axios from "axios"
import config from "./config"

const updateTaskFromStage = async (taskData) => {
        const res = await Axios.put(config.BACKEND_BASE_API_URL + `/stages/updateTask/${taskData.stageId}`, taskData);
        return res;
}

export {
    updateTaskFromStage
};