import React,{ useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Button from '@mui/material/Button';
import "./Cart.css"

export default function Cart (props){

    const {cartList, addItemToCart, clear, remItemFromCart} = useContext(CartContext);

    

    return(
        <div className="itemContainer">
            <h1>Carrito actual: </h1>
            {cartList.map((item) => {
                return (<div key={item.id} className="item">
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Importe total: {item.total}</p>
                            <Button variant="contained" component="span" color="primary" onClick={() => remItemFromCart(item)}>Eliminar</Button>
                        </div>
                        
                        )})
            }
            <Button variant="contained" component="span" color="primary" onClick={clear} className="clear">Limpiar carro</Button>
        </div>
    )
}