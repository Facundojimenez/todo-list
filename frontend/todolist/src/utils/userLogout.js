import Axios from "axios";
import config from "./config";

const logoutUser = async () => {
    const response = await Axios.post(config.BACKEND_BASE_API_URL + "/users/logout", {withCredentials: true});

    if(response.status === 200){
        console.log("logout correcto")
    }
    else{
        console.log("logout fallido")

    }
    return response;

}

export {
    logoutUser
}
