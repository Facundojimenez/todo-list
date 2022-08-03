import { Stack, Box, Typography } from "@mui/material";
import Task from "../components/Task";

const styles = {
    stageContainer: {
        backgroundColor: "#00ff00",
        minWidth: "200px",
        maxWidth: "300px",
        padding: "1em"
    }
}

const Stage = ({title, tasks}) =>{
    return(
        <Box>
            <Box style={{backgroundColor: "blue"}}> 
                <Typography align="center" variant="h4">
                    {title}
                </Typography>
            </Box>
            <Stack sx={styles.stageContainer} spacing={2}>
                {
                    tasks.map(tarea => {
                        return(
                            <Task title={tarea.title} description={tarea.description} key={tarea.id}/>
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default Stage;