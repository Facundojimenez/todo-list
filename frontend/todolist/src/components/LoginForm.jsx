import {Paper, Box, Typography, Grid, TextField, Button, Stack} from "@mui/material"
import { makeStyles } from '@mui/styles';
import CustomTheme from "../context/CustomTheme";
import BrandLogo from "./BrandLogo";
import Axios from "axios";
import config from "../utils/config";
import { useState } from "react";
import {actualizarCamposForm} from "../utils/formFunctions";

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

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = async (event) =>{
        const response = await Axios.post(config.BACKEND_BASE_API_URL + "/users/login", userData, {withCredentials: true});

        if(response.status === 200){
            //entro a la pagina
        }


        console.log(response);
    }

    const handleInputChange = (event) =>{
        actualizarCamposForm(event, userData, setUserData);
    };

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
                                <TextField fullWidth id="username" label="Nombre de usuario" variant="outlined" onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth id="password" label="Contraseña" variant="outlined"  type="password" onChange={handleInputChange}/>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" marginTop="30px">
                            <Button className={classes.botonEnviar} fullWidth variant="contained" color="primary" onClick={handleSubmit}>
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