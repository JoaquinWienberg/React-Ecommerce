import React,{ useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
import Box from '@mui/material/Box';
import "./CardDetail.css";
import pay from "../../img/payments.png";
import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../MuiStyle/Themes"
import { Link } from "react-router-dom";


export default function CardDetail (props) {
    
    const urlImg = props.urlImg;
    const {cartList, addItemToCart} = useContext(CartContext);

    const onAdd = (e, count) => {
        e.stopPropagation()
        if (count > 0) {
            const newItem = {quantity: count, price: props.price, title: props.product, urlImg: props.urlImg, total: props.price * count, id: props.id, product: props.product}
            addItemToCart(newItem)
        }

    }

    return (
        <div className="container">
            <Box sx={{ display:{ xs: 'flex', sm: 'none'}, justifyContent: 'space-evenly', alignItems: "center" }} className="CardDetailBox">
                <div className="CardDetail">
                    <h3>{props.product}</h3>
                    <img className="productImage" src={urlImg}></img>
                    <p className="price">Precio: $ {parseFloat(props.price).toLocaleString()}</p>
                    <p>12 cuotas sin interés de $ {parseFloat(props.payments).toLocaleString()}</p>
                    <ItemCount stock={props.stock} action={onAdd} />
                    <ThemeProvider theme={theme}>
                        <Link to={"/cart"}>
                        <Button variant="contained" component="span" color="primary">Confirmar compra</Button>
                        </Link>
                    </ThemeProvider>
                    <p>{props.desc}</p>
                    <p>El producto se encuentra en stock actualmente. Ante cualquier duda sobre el mismo, no dude en contactarnos!</p>
                    <p>Medios de pago:</p>
                    <img src={pay}></img>
                </div>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex'}, justifyContent: 'space-evenly', alignItems: "center" }} className="CardDetailBox">
                <img className="productImage" src={urlImg}></img>
                <div className="CardDetail">
                    <h3>{props.product}</h3>
                    <p className="price">Precio: $ {parseFloat(props.price).toLocaleString()}</p>
                    <p>12 cuotas sin interés de $ {parseFloat(props.payments).toLocaleString()}</p>
                    <ItemCount stock={props.stock} action={onAdd} />
                    <ThemeProvider theme={theme}>
                        <Link to={"/cart"}>
                        <Button variant="contained" component="span" color="primary">Confirmar compra</Button>
                        </Link>
                    </ThemeProvider>
                    <p>{props.desc}</p>
                    <p>El producto se encuentra en stock actualmente. Ante cualquier duda sobre el mismo, no dude en contactarnos!</p>
                    <p>Medios de pago:</p>
                    <img src={pay}></img>
                </div>
            </Box>
        </div>

    )
}

