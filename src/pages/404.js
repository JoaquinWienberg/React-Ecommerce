import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../components/MuiStyle/Themes"
import { Link } from "react-router-dom";
import "./404.css"

export default function Error404 (){
    return (
        <div className="error404">
            <h1>ERROR 404 - Pagina no encontrada</h1>
            <ThemeProvider theme={theme}>
                <Link to={"/"}>
                    <Button variant="contained" component="span" color="primary">Volver al inicio</Button>
                </Link>
            </ThemeProvider>
        </div>
    )
}