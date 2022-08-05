import { Stack, Box, Typography, IconButton } from "@mui/material";
import { useContext } from "react";
// import { useEffect, useState } from "react";
import Task from "../components/Task";
import UserContext from "../context/UserContext";
import TaskAdder from "../components/TaskAdder";
import { useState } from "react";
import { useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { deleteStageFromDashboard } from "../utils/deleteData";
import { updateStageFromDashboard } from "../utils/updateData";
import { Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions, TextField, Grid} from '@mui/material';


const styles = {
    stageContainer: {
        backgroundColor: "#00ff00",
        width: "200px",
        padding: "1em"
    }
}

const Stage = ({title, stageId}) =>{
    const {currentDashboard, deleteStageRender} = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const [stageData, setStageData] = useState( () => {
            const stageFind = currentDashboard.stages.find((stage) => stage._id === stageId);
            return stageFind
        }
    )
    let formData = stageData; 

    const [tasks, setTasks] = useState(() => {
        const stageFind = currentDashboard.stages.find((stage) => stage._id === stageId);
        return stageFind.tasks
    })

    useEffect(() => {
        const stageFind = currentDashboard.stages.find((stage) => stage._id === stageId);
        setTasks(stageFind.tasks)
    }, [currentDashboard])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleInputChange = (event) =>{
        formData = ({...formData, [event.target.id]: event.target.value})
        console.log(formData)
      };

      const updateStage = async () =>{
        setStageData(formData)
        handleClose();
        await updateStageFromDashboard(formData);
      }

      const deleteStage = async () => {
        deleteStageRender(stageId)
        handleClose();
        await deleteStageFromDashboard(stageId, stageId); //EL PRIMER ARGUMENTO LO TENGO QUE CAMBIAR POR DASHBOARD_ID MAS ADELANTE
      }

    return(
        <>
            {/* Stage */}
            <Box>
                <Box display="flex" justifyContent="space-between" style={{backgroundColor: "blue"}}> 
                    <Typography align="center" variant="h4">
                        {stageData.title}
                    </Typography>
                    <IconButton size="medium" onClick={handleClickOpen}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <TaskAdder stageId={stageId}/>
                <Stack sx={styles.stageContainer} spacing={2}>
                    {
                        tasks.map(task => {
                            return(
                                <Task title={task.title} description={task.description} order={task.order} stageId={stageId} taskId={task._id} key={task._id}/>
                            )
                        })
                    }
                </Stack>
            </Box>

            {/* Menu que se abre */}
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
                <DialogTitle>Editare Stage</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Titulo del stage:
                    </DialogContentText>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    defaultValue={title}
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={4} justifyContent="space-between">
                            <Button variant="outlined" color="error" onClick={deleteStage}>Eliminar</Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button onClick={handleClose}>Cancelar</Button>
                                <Button onClick={updateStage}>Guardar</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
        
    )
}

export default Stage;