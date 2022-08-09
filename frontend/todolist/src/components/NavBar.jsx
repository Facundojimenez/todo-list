import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { logoutUser } from '../utils/userLogout';
import { useNavigate } from "react-router-dom";
import DashboardSelector from './DashboardSelector';


export default function NavBar() {
  const {setUser, currentDashboard, setCurrentDashboard} = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = async () =>{
    await logoutUser()
    navigate("/login")
    setUser(null)
    setCurrentDashboard(null);
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div"  align="left">
              TaskMaster
          </Typography>
          {currentDashboard ? <DashboardSelector/> : <></>}
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}