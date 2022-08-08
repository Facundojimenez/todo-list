import LoginForm from "../components/LoginForm";
import {  Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	contactFormContainer:{
		minHeight: "100vh",
		display: "flex",
        alignItems: "center",
		justifyContent: "center",
	}
})

const Login = () =>{
    const classes = useStyles();
    return (
        <>
            <Box className={classes.contactFormContainer}>
                <LoginForm/>
            </Box>
        </>
    )
}

export default Login;