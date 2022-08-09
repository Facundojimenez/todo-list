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