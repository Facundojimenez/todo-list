import {Paper, Box, Typography, Grid, TextField, Button} from "@mui/material"
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
    formContainer:{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        minHeight: "500px",
        maxHeight: "600px",
        maxWidth: "600px"
    },
    formInnerContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "75%"
    },
    botonEnviar:{
        marginTop: "32px"
    },
    backdrop:{
        zIndex: 99,
        color: "#fff"
    }
})


const SignUpForm = () =>{
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.formContainer}>
                <Box className={classes.formInnerContainer}>
                    <Box mb={3}>
                        <Typography variant="h4" element="h4" color="primary">
                            ¡Registrarse!
                        </Typography>
                    </Box>
                    <form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth id="username" label="username" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth helperText="El email es obligatorio" id="email" label="Email" variant="outlined" /> 
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth id="password" label="password" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Box textAlign="center" marginTop="30px">
                            <Button className={classes.botonEnviar} size="large" variant="contained" color="primary" endIcon={<SendIcon/>}>
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </>
    )
    
}

export default SignUpForm;