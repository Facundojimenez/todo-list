import Axios from "axios"
import config from "./config"

const fetchStages = async () => {
    const stagesData = await Axios.get(config.BACKEND_BASE_API_URL + "/stages");
    return stagesData.data;
}

export {
    fetchStages
};