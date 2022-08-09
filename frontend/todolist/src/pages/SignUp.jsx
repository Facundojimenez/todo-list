import SignUpForm from "../components/SignUpForm";
import {  Box } from "@mui/material";
import styles from "../styles/styles";

const SignUp = () =>{
    return (
        <Box sx={styles.mainContainer}>
            <SignUpForm/>
        </Box>
    )
}

export default SignUp;