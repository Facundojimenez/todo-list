import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import styles from "../styles/styles";

export default function NotFound() {
    return (
        <Box sx={styles.mainContainer}>
            <Typography variant="h3" align="center" gutterBottom>
                Oops, no se encontró la pagina que buscabas!!
            </Typography>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button  variant="contained" startIcon={<HomeIcon/>}>
                    IR AL HOME
                </Button>
            </Link>
        </Box>
    )
}