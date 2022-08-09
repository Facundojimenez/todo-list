import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


export default function NotFound() {
    return (
        <>
            <Container sx={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h3" gutterBottom>
                    Oops, no se encontró la pagina que buscabas!!
                </Typography>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button  variant="contained" startIcon={<HomeIcon/>}>
                        IR AL HOME
                    </Button>
                </Link>
                
            </Container>
        </>
    )
}