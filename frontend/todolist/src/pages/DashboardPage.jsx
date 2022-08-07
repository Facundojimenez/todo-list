import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "../components/NavBar";
import Stage from "./Stage";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import StageAdder from "../components/StageAdder";
import EditIcon from '@mui/icons-material/Edit';
import {IconButton} from "@mui/material";

const styles = {
    stagesContainer: {
        backgroundColor: "#99c7f2",
        overflow: "scroll"
    }
}

const DashboardPage = () => {
    const {user, currentDashboard} = useContext(UserContext)
    console.log(user)
    console.log(currentDashboard)
    if(currentDashboard){
        return(
            <>
                <NavBar/>
                <Container sx={styles.stagesContainer} maxWidth="false">
                    <Typography variant="h2" align="center">
                        {currentDashboard.title}
                        <IconButton size="large">
                            <EditIcon />
                        </IconButton>
                    </Typography>
                    <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={2}> 
                        {
                            !currentDashboard.stages ? "loading" : currentDashboard.stages.map(stage => {
                                return (
                                    <Stage title={stage.title} tasks={stage.tasks} dashboardId={stage.dashboardId} stageId={stage._id} key={stage._id} /> 
                                )
                            })
                        }
                        <StageAdder dashboardId={currentDashboard._id}/>
                    </Stack>
                </Container>
            </>
        )
    }
    else{
        return(
            <>
                <NavBar/>
                <h1> no tenes dashboads, crea uno</h1>
            </>
        ) 
    }
    
}

export default DashboardPage;
