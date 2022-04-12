import React,{ useState } from "react";
import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../MuiStyle/Themes"

export default function ItemCount(props) {
    const [ count, setCount ] = useState(0)

    const addCount = () => {
        if (count == props.stock) {
            console.log ("Se ha llegado al limite de stock. No es posible agregar mas unidades del producto.")
        } else {
        setCount(count + 1)
        }
    }

    const removeCount = () => {
        if (count === 0){
            setCount(0)
            console.log("El producto no se encuentra en el carro de compras.")
        } else {
        setCount(count - 1)
        }
    }

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Button variant="contained" component="span" color="secondary" onClick={addCount}>+</Button>
                <Button variant="contained" component="span" color="secondary" onClick={removeCount}>-</Button>
                <p>Cantidad seleccionada: {count}</p>
                <Button variant="contained" component="span" color="primary" onClick={(e) => props.action(e, count)}>Agregar al carro</Button>
            </ThemeProvider>        
        </div>
    )
}


    /*const onAdd = () => {
        if (count > props.stock) {
            console.log ("Se ha seleccionado una cantidad mayor al stock disponible. Por favor elija una cantidad menor.")
        } else if (count >= 1) {
            console.log ("El producto se a agregado con exito al carro.")
        } else {
            console.log ("No se han agregado unidades al carro.")
        }
    }*/