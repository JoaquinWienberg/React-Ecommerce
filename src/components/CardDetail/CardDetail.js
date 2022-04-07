import React,{ useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Box from '@mui/material/Box';
import "./CardDetail.css";
import pay from "../../img/payments.png";
import Button from '@mui/material/Button';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../MuiStyle/Themes"
import { Link } from "react-router-dom";


export default function CardDetail (props) {
    
    const urlImg = props.urlImg;
    const [cartAmount, setcartAmount] = useState(0);
    const [hide ,setHide] = useState(true)

    const onAdd = (e, count) => {
        e.stopPropagation()
        setcartAmount(cartAmount + count)
        console.log("Se han agregado la cantidad seleccionada al carro")
        setHide(false);
    }

    const confirmPurchase = () => {
        console.log("Unidades confirmadas:", cartAmount)
    }

    return (
        <div className="container">
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }} className="CardDetailBox">
                <img src={urlImg}></img>
                <div className="CardDetail">
                    <h3>{props.product}</h3>
                    <p className="price">Precio: $ {props.price}</p>
                    <p>12 cuotas sin interés de $ {props.payments}</p>
                    <ItemCount stock={props.stock} action={onAdd} action2={hide}/>
                    <ThemeProvider theme={theme}>
                        <Link to={"/cart"}>
                        <Button variant="contained" component="span" color="primary" onClick={confirmPurchase}>Confirmar compra</Button>
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

/* const url = "https://run.mocky.io/v3/82c67f6b-7718-4aec-9149-8ee74c3148a8"

const getItem = async () => {
    const response = await fetch(url);
    const stock = await response.json();
    console.log(stock);
}

useEffect(() => {

    getItem();

}, [])
return null; */
/*
<CardMedia component="img"
//height="200"
src="../" //{props.urlImg}
alt={props.product} 
sx={{maxWidth: "280px"}} />*/