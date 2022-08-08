import {Paper, Box, Typography, Grid, TextField, Button, Stack} from "@mui/material"
import { makeStyles } from '@mui/styles';
import CustomTheme from "../context/CustomTheme";
import BrandLogo from "./BrandLogo";
import { useState } from "react";
import {actualizarCamposForm} from "../utils/formFunctions";
import { loginUser } from "../utils/userLogin";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const useStyles = makeStyles({
    formContainer:{
        display: "flex",
        justifyContent: "center",
        padding: "1em",
        height: "30em",
        width: "30em"
    },
    formInnerContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "85%"
    }
    
})

const LoginForm = () =>{
    const {setUser} = useContext(UserContext);



    const classes = useStyles();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = async () =>{
        const response = await loginUser(userData)
        setUser(response.data.user)
        navigate("/dashboard")
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
                            <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
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