import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState, useContext } from "react"
import UserContext from '../context/UserContext';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GridViewIcon from '@mui/icons-material/GridView';

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

export default function CustomizedMenus() {
	const {changeDashboard, currentDashboard ,user} = useContext(UserContext)

  const [anchorEl, setAnchorEl] = useState(null);
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
          <MenuItem onClick={handleClose}>
            <DashboardCustomizeIcon/> 
              Nuevo Dashboard
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }
}
