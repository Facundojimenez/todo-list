import {  Typography, IconButton } from "@mui/material";
import { Container, Box } from "@mui/system";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "../styles/styles"

function Footer(){
    return (
        <Container maxWidth={false} sx={styles.footer}>
            <Typography variant="h5" element="h4">
                ¡Seguime en mis redes!
            </Typography>
            <Box>
                <IconButton href="https://github.com/Facundojimenez" target="_blank" sx={styles.letrasBlancas}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/facundo-jimenez-980a831ba/" target="_blank" sx={styles.letrasBlancas}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>
            </Box>
        </Container>
     )
}

export default Footer