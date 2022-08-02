import SignUpForm from "../components/SignUpForm";
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