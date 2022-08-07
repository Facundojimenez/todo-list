import Axios from "axios"
import config from "./config"

const fetchStages = async (dashboardId) => {
    const stagesData = await Axios.get(config.BACKEND_BASE_API_URL + `/stages?dashboardId=${dashboardId}`);
    return stagesData.data;
}

export {
    fetchStages
};