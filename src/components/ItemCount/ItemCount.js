import React,{ useState } from "react";
import Button from '@mui/material/Button';

export default function ItemCount(props) {
    const [ count, setCount ] = useState(0)
    const [ stock, setStock ] = useState(8)

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

    const onAdd = () => {
        if (count > props.stock) {
            console.log ("Se ha seleccionado una cantidad mayor al stock disponible. Por favor elija una cantidad menor.")
        } else if (count >= 1) {
            console.log ("El producto se a agregado con exito al carro.")
        } else {
            console.log ("No se han agregado unidades al carro.")
        }
    }

    return(
        <div>
            <Button variant="contained" component="span" mt={12} onClick={addCount}>+</Button>
            <Button variant="contained" component="span" mt={12} onClick={removeCount}>-</Button>
            <p>Cantidad seleccionada: {count}</p>
            <Button variant="contained" component="span" mt={12} onClick={onAdd}>Agregar al carro</Button>
        </div>
    )
}