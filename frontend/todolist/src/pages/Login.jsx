import LoginForm from "../components/LoginForm";
import {  Box } from "@mui/material";
import styles from "../styles/styles";

export default function Login() {
    return (
        <Box sx={styles.mainContainer}>
            <LoginForm/>
        </Box>
    )
}
