import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box,Grid } from '@mui/material';
import {actualizarCamposForm} from  "../utils/formFunctions"

import { createTaskFromStage } from "../utils/createData";
import { deleteTaskFromStage } from '../utils/deleteData';
import { useContext } from 'react';
import UserContext from "../context/UserContext"
import AddIcon from '@mui/icons-material/Add';


export default function TaskAdder(props) {
  const {addTaskRender} = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
      title: "",
      description: "",
      ...props
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) =>{
    actualizarCamposForm(event, taskData, setTaskData);
    console.log(taskData)
  };

  const createTask = async () =>{
    console.log(taskData)
    addTaskRender(taskData)
    handleClose();
    await createTaskFromStage(taskData);
  }


  
  return (
    <>
      {/* tarea */}
      <Box  style={{backgroundColor: "black", padding: "1em 0"}} display="flex" justifyContent="center">
        <Button onClick={handleClickOpen} variant="contained" endIcon={<AddIcon />}>Agregar tarea</Button>
      </Box>

      {/* Menu que se abre */}
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <DialogTitle>Crear tarea</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Titulo de la tarea:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                defaultValue={taskData.title}
                type="text"
                fullWidth
                variant="standard"
                onChange={handleInputChange}
              />
            <DialogContentText>
              Descripción:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              defaultValue={taskData.description}
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={createTask}>Guardar</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}