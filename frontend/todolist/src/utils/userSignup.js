import Axios from "axios";
import config from "./config";


const signupUser = async (userData) => {
    const response = await Axios.post(config.BACKEND_BASE_API_URL + "/users/signup", userData, {withCredentials: true});

    if(response.status === 200){
        console.log("signup correcto")
    }
    else{
        console.log("signup fallido")

    }
    return response;

}

export {
    signupUser
}
