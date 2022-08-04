import { Stack, Box, Typography } from "@mui/material";
import { useContext } from "react";
// import { useEffect, useState } from "react";
import Task from "../components/Task";
import UserContext from "../context/UserContext";

const styles = {
    stageContainer: {
        backgroundColor: "#00ff00",
        minWidth: "200px",
        maxWidth: "300px",
        padding: "1em"
    }
}

const Stage = ({title, tasks, stageId}) =>{
    return(
        <Box>
            <Box style={{backgroundColor: "blue"}}> 
                <Typography align="center" variant="h4">
                    {title}
                </Typography>
            </Box>
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
    )
}

export default Stage;