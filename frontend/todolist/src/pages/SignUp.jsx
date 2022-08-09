import SignUpForm from "../components/SignUpForm";
import {  Box } from "@mui/material";
import styles from "../styles/styles";

export default function SignUp() {
    return (
        <Box sx={styles.mainContainer}>
            <SignUpForm/>
        </Box>
    )
}
