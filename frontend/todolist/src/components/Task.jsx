import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box,Grid, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import { updateTaskFromStage } from "../utils/updateData";
import { deleteTaskFromStage } from '../utils/deleteData';
import UserContext from "../context/UserContext"


export default function Task(props) {
  const {deleteTaskRender} = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
      ...props
  })
  let formData = taskData; 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleInputChange = (event) =>{
    formData = ({...formData, [event.target.id]: event.target.value})
  };

  const updateTask = async () =>{
    const updatedTask = await updateTaskFromStage(formData);
    updatedTask.taskId = updatedTask._id 
    updatedTask.stageId = taskData.stageId 

    setTaskData(updatedTask)
    handleClose();
  }

  const deleteTask = async () =>{
    deleteTaskRender(taskData)
    handleClose();
    await deleteTaskFromStage(taskData.stageId, taskData.taskId);
  }

  
  return (
    <>
      {/* tarea */}
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {taskData.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            {taskData.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>Editar</Button>
        </CardActions>
      </Card>

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