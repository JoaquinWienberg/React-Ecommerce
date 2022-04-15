import React,{ useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Button from '@mui/material/Button';
import "./Cart.css"

export default function Cart (props){

    const {cartList, cartTotal, clear, remItemFromCart, calculateTotal} = useContext(CartContext);

    

    return(
        <div className="itemContainer">
            <h1>Carrito actual: </h1>
            {cartList.map((item, i) => {
                return (<div key={i} className="item">
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Importe total: {item.total}</p>
                            <Button variant="contained" component="span" color="primary" onClick={() => remItemFromCart(item)}>Eliminar</Button>
                        </div>
                        
                        )})
            }
            <div>Total del pedido: {cartTotal}</div>
            <Button variant="contained" component="span" color="primary" onClick={clear} className="clear">Limpiar carro</Button>
        </div>
    )
}