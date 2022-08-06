import { Dialog, DialogTitle, DialogContent,IconButton, DialogContentText, DialogActions, TextField, Button } from '@mui/material';
import { useState, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {actualizarCamposForm} from  "../utils/formFunctions"
import { createTaskFromStage } from "../utils/createData";
import UserContext from "../context/UserContext"


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
      {/* boton de agregartarea */}
      <IconButton  onClick={handleClickOpen}>
          <AddIcon />
      </IconButton>

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