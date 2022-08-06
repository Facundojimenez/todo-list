import Axios from "axios";
import config from "../utils/config";

const loginUser = async (userData) => {
    const response = await Axios.post(config.BACKEND_BASE_API_URL + "/users/login", userData, {withCredentials: true});

    if(response.status === 200){
        console.log("login correcto")
    }
    else{
        console.log("login fallido")

    }
    // console.log(response);
    return response;

}

export {
    loginUser
}
