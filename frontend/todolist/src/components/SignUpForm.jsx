import {Paper, Box, Stack, Typography, Grid, TextField, Button} from "@mui/material"
import CustomTheme from "../context/CustomTheme";
import BrandLogo from "./BrandLogo";
import { useState, useContext } from "react";
import {actualizarCamposForm} from "../utils/formFunctions";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../utils/userSignup";
import UserContext from "../context/UserContext";
import styles from "../styles/styles";

export default function SignUpForm() {
	const {setUser} = useContext(UserContext);
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
			username: "",
			email: "",
			password: ""
	});

	const handleSubmit = async () =>{
			const response = await signupUser(userData)
			setUser(response.data.user)
			navigate("/dashboard")
	}

	const handleInputChange = (event) =>{
			actualizarCamposForm(event, userData, setUserData);
	};

	return (
		<Paper theme={CustomTheme} sx={{...styles.formContainer, minHeight: "500px"}}>
			<Stack sx={styles.formInnerContainer}>
				<BrandLogo/>
				<Typography variant="h4" element="h4" color="primary">
						¡Registrarse!
				</Typography>
				<form>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField fullWidth id="username" label="Nombre de usuario" variant="outlined" onChange={handleInputChange}/>
						</Grid>
						<Grid item xs={12}>
							<TextField required fullWidth  id="email" label="Email" variant="outlined" onChange={handleInputChange}/> 
						</Grid>
						<Grid item xs={12}>
							<TextField fullWidth id="password" label="Contraseña" variant="outlined"  type="password" onChange={handleInputChange}/>
						</Grid>
					</Grid>
					<Box textAlign="center" marginTop="30px">
						<Button sx={styles.botonEnviar} fullWidth variant="contained" color="primary" onClick={handleSubmit}>
								REGISTRARSE
						</Button>
					</Box>
					<Box sx={{paddingTop: "0.7em", display: "flex", justifyContent: "center"}}>
						<Link to="/login" style={{ textDecoration: 'none' }}>
							<Typography variant="p" element="h6" color="primary" align="center">
									¿Ya tenes una cuenta? Iniciá sesión 
							</Typography>
						</Link>
					</Box>
				</form>
			</Stack>
		</Paper>
	)
}

