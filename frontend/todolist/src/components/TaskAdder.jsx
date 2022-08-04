import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box,Grid } from '@mui/material';
import {actualizarCamposForm} from  "../utils/formFunctions"

import { updateTaskFromStage } from "../utils/updateData";
import { deleteTaskFromStage } from '../utils/deleteData';
import { useContext } from 'react';
import UserContext from "../context/UserContext"

export default function Task(props) {
  const {deleteTaskRender} = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
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

  const updateTask = async () =>{
    await updateTaskFromStage(taskData);
    handleClose();
  }

  const deleteTask = async () =>{
    // console.log(taskData)
    // await deleteTaskFromStage(taskData.stageId, taskData.taskId);
    deleteTaskRender(taskData)
    handleClose();
  }

  
  return (
    <>
      {/* tarea */}
      <Button onClick={handleClose}>Cancelar</Button>

      {/* Menu que se abre */}
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <DialogTitle>Editar tarea</DialogTitle>
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
          <Grid container>
            <Grid item xs={4} justifyContent="space-between">
              <Button variant="outlined" color="error" onClick={deleteTask}>Eliminar</Button>
            </Grid>
            <Grid item xs={8}>
            <Box display="flex" justifyContent="flex-end">
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={updateTask}>Guardar</Button>
            </Box>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

    </>
  );
}