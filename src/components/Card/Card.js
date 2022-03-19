import React from "react";
import Button from '@mui/material/Button';
import "./Card.css";

export default function Card(props) {
    return(
        <div classname="CardContainer">
            <div className="Card">
                <div>
                    <img>{props.image}</img>
                    <h3>{props.product}</h3>
                    <p>${props.price}</p>
                    <p>12 cuotas de ${props.payments}</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}