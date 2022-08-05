import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "../components/NavBar";
import Stage from "./Stage";
import {Typography} from "@mui/material";
import { useState, useEffect } from "react";
import {fetchStages} from "../utils/fetchData"
import { useContext } from "react";
import UserContext from "../context/UserContext";
import StageAdder from "../components/StageAdder";

const styles = {
    stagesContainer: {
        backgroundColor: "#ff0000"
    }
}

const DashboardPage = () => {
    const {currentDashboard} = useContext(UserContext)
    return(
        <>
            <NavBar/>
            <Container sx={styles.stagesContainer}>
                <Typography variant="h3" align="center">
                    hola
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







// const arrStageData = [
//     {
//         id: 1,
//         title: "Recibido",
//         tasks: [
//             {
//                 id: 1,
//                 title: "tarea1",
//                 description: "hacer la tarea"
//             },
//             {
//                 id: 2,
//                 title: "tarea2",
//                 description: "ir al super"
//             },
//             {
//                 id: 3,
//                 title: "tarea3",
//                 description: "visitar a un amigo"
//             }
//         ]
//     },
//     {
//         id: 2,
//         title: "En proceso",
//         tasks: [
//             {
//                 id: 4,
//                 title: "tarea4",
//                 description: "comprar comida"
//             },
//             {
//                 id: 5,
//                 title: "tarea5",
//                 description: "pagar impuestos"
//             },
//             {
//                 id: 6,
//                 title: "tarea6",
//                 description: "visitar a la tia"
//             }
//         ]
//     },
//     {
//         id: 3,
//         title: "Finalizada",
//         tasks: [
//             {
//                 id: 7,
//                 title: "tarea7",
//                 description: "hacer la tarea"
//             },
//             {
//                 id: 8,
//                 title: "tarea8",
//                 description: "ir al super"
//             },
//             {
//                 id: 9,
//                 title: "tarea9",
//                 description: "visitar a un amigo"
//             },
//             {
//                 id: 10,
//                 title: "tarea10",
//                 description: "visitar a un amigo"
//             },
//             {
//                 id: 1,
//                 title: "tarea10",
//                 description: "visitar a un amigo"
//             }
//         ]
//     }
// ]
