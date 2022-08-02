import LoginForm from "../components/LoginForm";
import {  Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	contactFormContainer:{
		minHeight: "80vh",
		display: "flex",
		justifyContent: "center",
		padding: "48px 16px",
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