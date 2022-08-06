import Button from '@mui/material/Button';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Box,Grid } from '@mui/material';
import {actualizarCamposForm} from  "../utils/formFunctions"

import { createTaskFromStage } from "../utils/createData";
import { useContext } from 'react';
import UserContext from "../context/UserContext"
import AddIcon from '@mui/icons-material/Add';


export default function TaskAdder(props) {
  const {addTaskRender, currentDashboard} = useContext(UserContext)
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
  };

  const createTask = async () =>{
    const createdTask = await createTaskFromStage(taskData);
    createdTask.stageId = taskData.stageId;

    handleClose();

    setTaskData(createdTask)
    addTaskRender(createdTask)
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