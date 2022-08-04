import Axios from "axios"
import config from "./config"

const deleteTaskFromStage = async (stageId, taskId) => {
        const res = await Axios.delete(config.BACKEND_BASE_API_URL + `/stages/deleteTask/${stageId}?taskId=${taskId}`);
        return res;
}

export {
    deleteTaskFromStage
};