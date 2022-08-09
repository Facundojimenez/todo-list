import { styled, alpha } from '@mui/material/styles';
import {Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, Menu, MenuItem} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState, useContext } from "react"
import UserContext from '../context/UserContext';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GridViewIcon from '@mui/icons-material/GridView';
import {createDashboardFromUser} from "../utils/createData"
import { actualizarCamposForm } from '../utils/formFunctions';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DashboardSelector() {
	const {changeDashboard, currentDashboard ,user, setUser} = useContext(UserContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    userId: user._id
  })

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeDashboard = (event) => {
    const dashboardId = parseInt(event.target.getAttribute("dashboardid"))
    console.log(dashboardId)
    changeDashboard(dashboardId)
    handleClose();
  }

  const handleInputChange = (event) =>{
    actualizarCamposForm(event, formData, setFormData);
  };

  const handleClickOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleAddDashboard = async () => {
    console.log(formData)
    const updatedUser =  await createDashboardFromUser(formData);
    setUser(updatedUser)
    handleClose();
    handleCloseForm()
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  if(currentDashboard){
    return (
      <div>
        <Button aria-controls={open ? 'demo-customized-menu' : undefined} variant="contained" disableElevation onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
          Elegir dashboard
        </Button>
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {
            user.dashboards.map(dashboard => {
              return (
                <MenuItem style={currentDashboard._id === dashboard._id ? {backgroundColor:"#dcdcdc"} : {}} onClick={handleChangeDashboard} dashboardid={dashboard._id} key={dashboard._id}>
                  <GridViewIcon/>
                  {dashboard.title}
                </MenuItem>
              )
            })
          }
          <MenuItem onClick={handleClickOpenForm}>
            <DashboardCustomizeIcon/> 
              Nuevo Dashboard
          </MenuItem>
        </StyledMenu>

        {/* Menu que se abre */}
        <Dialog open={openForm} onClose={handleCloseForm} fullWidth={true} maxWidth="sm">
          <DialogTitle>Crear Dashboard</DialogTitle>
            <DialogContent>
              <DialogContentText>
                  Titulo:
              </DialogContentText>
              <TextField autoFocus margin="dense" id="title" defaultValue="" type="text" fullWidth variant="standard" onChange={handleInputChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancelar</Button>
            <Button onClick={handleAddDashboard}>Guardar</Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
  else{
    return(
      <div>
        <Button aria-controls={open ? 'demo-customized-menu' : undefined} variant="contained" disableElevation onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
          Crear mi primer dashboard
        </Button>
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClickOpenForm}>
              <DashboardCustomizeIcon/> 
                Nuevo Dashboard
          </MenuItem>
        </StyledMenu>

        {/* Menu que se abre */}
        <Dialog open={openForm} onClose={handleCloseForm} fullWidth={true} maxWidth="sm">
          <DialogTitle>Crear Dashboard</DialogTitle>
            <DialogContent>
              <DialogContentText>
                  Titulo:
              </DialogContentText>
              <TextField autoFocus margin="dense" id="title" defaultValue="" type="text" fullWidth variant="standard" onChange={handleInputChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancelar</Button>
            <Button onClick={handleAddDashboard}>Guardar</Button>
          </DialogActions>
        </Dialog>
      </div>

      
    )
  }
}
