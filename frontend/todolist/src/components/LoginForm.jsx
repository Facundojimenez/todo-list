import {Paper, Box, Typography, Grid, TextField, Button, Stack} from "@mui/material"
import CustomTheme from "../context/CustomTheme";
import BrandLogo from "./BrandLogo";
import { useState, useContext } from "react";
import {actualizarCamposForm} from "../utils/formFunctions";
import { loginUser } from "../utils/userLogin";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import styles from "../styles/styles";

export default function LoginForm () {
	const {setUser} = useContext(UserContext);
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
		<Paper theme={CustomTheme} sx={styles.formContainer}>
			<Stack sx={styles.formInnerContainer}>
				<BrandLogo/>
				<Typography variant="h4" element="h4" color="primary">
					¡Iniciar Sesión!
				</Typography>
				<form>
					<Grid container spacing={4}>
						<Grid item xs={12}>
							<TextField fullWidth id="username" label="Nombre de usuario" variant="outlined" onChange={handleInputChange}/>
						</Grid>
						<Grid item xs={12}>
							<TextField fullWidth id="password" label="Contraseña" variant="outlined"  type="password" onChange={handleInputChange}/>
						</Grid>
						</Grid>
						<Box textAlign="center" marginTop="30px">
						<Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
							INICIAR SESION
						</Button>
						<Box sx={{paddingTop: "0.7em"}}>
							<Link to="/signup" style={{ textDecoration: 'none', marginLeft: "0.5em" }}>
								<Typography variant="p" element="h6" color="primary" align="center">
									¿No tenés cuenta? Registrate 
								</Typography>
							</Link>
						</Box>
					</Box>
				</form>
			</Stack>
		</Paper>
	)   
}

