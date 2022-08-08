import SignUpForm from "../components/SignUpForm";
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

const SignUp = () =>{
    const classes = useStyles();
    return (
        <>
            <Box className={classes.contactFormContainer}>
                <SignUpForm/>
            </Box>
        </>
    )
}

export default SignUp;