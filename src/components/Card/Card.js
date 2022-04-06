import React,{ useState } from "react";
import Button from '@mui/material/Button';
import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';


export default function Card(props) {

    return(
        <div className="CardContainer">
            <div className="Card">
                <div>
                    <img>{props.image}</img>
                    <h3><Link to={`/products/${props.type}/${props.id}`}>{props.product}</Link></h3>
                    <p>${props.price}</p>
                    <p>12 cuotas de ${props.payments}</p>
                    <p>Stock disponible: {props.stock} unidad/es</p>
                    <ItemCount stock={props.stock}/>
                </div>
            </div>
        </div>
    )
}