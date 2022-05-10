import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../MuiStyle/Themes";
import "./Carousel.css"

export default function Caro(props){
    var items = [
        {
            name: "Nuevas placas de video RTX series 3000",
            description: "Listos para la nueva generación de juegos!",
            url: "https://i.ibb.co/j3V8NdM/NVIDIA-Ge-Force-RTX-3080.jpg"
        },
        {
            name: "Nuevos procesadores Intel y AMD",
            description: "Listos para liberar el mejor rendimiento de tu pc!",
            url:"https://i.ibb.co/PCWyYvB/gsmarena-000.jpg"
        }
    ]

    const Item = (props) => {
        return (
            <Paper className="carouselBackground">
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <img className="carouselImg" src={props.item.url}></img>
                <ThemeProvider theme={theme}>  
                    <Button variant="contained" component="span" color="secondary" className="linkButton">
                        <Link to={"/products"} className="linkTo">Ver productos</Link>
                    </Button>
                </ThemeProvider>
            </Paper>
        )
    }

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}



