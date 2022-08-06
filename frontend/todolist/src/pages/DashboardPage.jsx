import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "../components/NavBar";
import Stage from "./Stage";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import StageAdder from "../components/StageAdder";


const styles = {
    stagesContainer: {
        backgroundColor: "#99c7f2",
        overflow: "scroll"
    }
}

const DashboardPage = () => {
    const {user, currentDashboard} = useContext(UserContext)
    console.log(user)
    return(
        <>
            <NavBar/>
            <Container sx={styles.stagesContainer} maxWidth="false">
                <Typography variant="h2" align="center">
                    Mi tablero de tareas
                </Typography>
                <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={2}> 
                    {
                        !currentDashboard.stages ? "loading" : currentDashboard.stages.map(stage => {
                            return (
                                <Stage title={stage.title} tasks={stage.tasks} stageId={stage._id} key={stage._id} /> 
                            )
                        })
                    }
                    <StageAdder dashboardId={currentDashboard._id}/>
                </Stack>
            </Container>
        </>
    )
}

export default DashboardPage;
