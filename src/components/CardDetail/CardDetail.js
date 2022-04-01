import React,{ useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import "./CardDetail.css";

export default function CardDetail (props) {
    
    const urlImg = props.urlImg;
    console.log(urlImg);

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }} className="CardDetailBox">
                <img src={require(`../../img/aor3060.jpg`)}></img>
                <div className="CardDetail">
                    <h3>{props.product}</h3>
                    <p>$ {props.price}</p>
                    <p>12 cuotas sin interés de $ {props.payments}</p>
                    <ItemCount stock={props.stock}/>
                    <p>{props.desc}</p>
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