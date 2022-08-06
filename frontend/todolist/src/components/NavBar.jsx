import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { logoutUser } from '../utils/userLogout';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = async () =>{
    console.log("hitt")
    const response = await logoutUser()
    console.log(response)
    setUser({})
    navigate("/login")
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Master
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hola, {user.username}
          </Typography>
          <Button color="inherit" onClick={handleSubmit}>Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}