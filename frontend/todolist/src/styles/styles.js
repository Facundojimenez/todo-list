// const COLORS = {

// }

import CustomTheme from "../context/CustomTheme";


const styles = {
    appContainer: {
        backgroundColor: "red",
        backgroundColor: "#99c7f2"
    },
    // stageContainer: {
    //     minWidth: "345px",
    //     minHeight: "100vh",
    //     bgcolor: "#ebebeb"
    // },
    // stageAdderContainer:{
    //     minWidth: "345px",
    //     minHeight: "100vh",
    //     padding: "0.5em",
    //     bgcolor: "rgba(235,235,235, 0.8)"
    // },
    stageContainer: {
        width: "345px",
        minHeight: "100vh",
        bgcolor: "#ebebeb"
    },
    stageAdderContainer:{
        width: "345px",
        minHeight: "100vh",
        padding: "0.5em",
        bgcolor: "rgba(235,235,235, 0.8)"
    },
    dashboardContainer: {
        overflow: "auto",
        paddingBottom: "2em"
    },
    letrasBlancas: {
        color: CustomTheme.palette.common.white
    },
    footer: {
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        maxHeight: "300px",
        padding: "1rem",
        color: CustomTheme.palette.common.white,
        backgroundColor: CustomTheme.palette.primary.dark
    },
    dashboardTitle:{
        padding: "0.3em 0"
    },
    logFormContainer: {
        minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
    }
}

export default styles;