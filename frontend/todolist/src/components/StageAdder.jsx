import Button from '@mui/material/Button';
import { useState } from 'react';
import { Dialog, DialogTitle,Typography, DialogContent, DialogContentText, DialogActions, TextField, Box,Grid } from '@mui/material';
import {actualizarCamposForm} from  "../utils/formFunctions"

import { createStageFromDashboard } from "../utils/createData";
import { useContext } from 'react';
import UserContext from "../context/UserContext"
import AddIcon from '@mui/icons-material/Add';

const styles = {
  stageContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "200px",
    padding: "1em"
  }
}

export default function StageAdder(props) {
  const {addStageRender} = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [StageData, setStageData] = useState({
    title: "",
    order: "",
    tasks: [],
    ...props
  })


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) =>{
    actualizarCamposForm(event, StageData, setStageData);
  };

  const createStage = async () =>{
    const newStage = await createStageFromDashboard(StageData);
    handleClose();
    addStageRender(newStage)
    setStageData({title: "", description: "", ...props})
  }


  
  return (
    <>
      {/* tarea */}
      <Box  sx={styles.stageContainer} display="flex" justifyContent="center" alignItems="flex-start">
        <Button onClick={handleClickOpen} variant="contained" endIcon={<AddIcon />}>Agregar Stage</Button>
      </Box>

      {/* <Box>
            <Box style={{backgroundColor: "blue"}}> 
                <Typography align="center" variant="h4">
                    sdsd
                </Typography>
            </Box>
        </Box> */}

      {/* Menu que se abre */}
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <DialogTitle>Crear Stage</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Titulo del stage:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              defaultValue={StageData.title}
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInputChange}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={createStage}>Guardar</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}