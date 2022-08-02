import {Paper, Box, Typography, Grid, TextField, Button, Stack} from "@mui/material"
import { makeStyles } from '@mui/styles';
import CustomTheme from "../context/CustomTheme";
import BrandLogo from "./BrandLogo";

const useStyles = makeStyles({
    formContainer:{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        minHeight: "400px",
        maxHeight: "500px",
        maxWidth: "400px"
    },
    formInnerContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "85%"
    },
    botonEnviar:{
        marginTop: "320px"
    },
    backdrop:{
        zIndex: 99,
        color: "#fff"
    }
})



const LoginForm = () =>{
    const classes = useStyles();

    const handleSubmit = () =>{

    }


    return (
        <>
            <Paper theme={CustomTheme} className={classes.formContainer}>
                <Stack className={classes.formInnerContainer}>
                    <BrandLogo/>
                    <Typography variant="h4" element="h4" color="primary">
                        ¡Iniciar Sesión!
                    </Typography>
                    <form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth id="username" label="Nombre de usuario" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth id="password" label="Contraseña" variant="outlined"  type="password" onClick={handleSubmit}/>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" marginTop="30px">
                            <Button className={classes.botonEnviar} fullWidth variant="contained" color="primary">
                                INICIAR SESION
                            </Button>
                        </Box>
                    </form>
                </Stack>
            </Paper>
        </>
    )
    
}

export default LoginForm;