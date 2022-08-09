import CustomTheme from "../context/CustomTheme"


const styles = {
    mainContainer:{
        backgroundColor: "#99c7f2",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    formContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-around",
        padding: "2em 1em",
        minHeight: "450px",
        maxWidth: "400px"
    },
    formInnerContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "85%"
    },
    stageContainer: {
        minHeight: "80vh"
    },
    stageAdder: {
        minHeight: "80vh",
        padding: "0.5em",
        minWidth: "300px",
        bgcolor: "rgba(235,235,235, 0.8)"
    },
    dashboardPage: {
        dashboardContainer: {
            backgroundColor: "#99c7f2"
        },
        noDashboardContainer: {
            backgroundColor: "#99c7f2",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        stagesContainer: {
            overflow: "auto",
            paddingBottom: "2em"
        }
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
    letrasBlancas: {
        color: CustomTheme.palette.common.white
    }
}

export default styles;