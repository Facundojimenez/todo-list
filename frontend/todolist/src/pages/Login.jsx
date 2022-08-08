import LoginForm from "../components/LoginForm";
import {  Box } from "@mui/material";
import styles from "../styles/styles"


const Login= () =>{
    return (
        <>
            <Box sx={styles.logFormContainer}>
                <LoginForm/>
            </Box>
        </>
    )
}

export default Login;