import React,{ useState } from "react";
import "./Card.css";
import { Link } from 'react-router-dom';


export default function Card(props) {

    return(
        <div className="CardContainer">
            <div className="Card">
                <div>
                <Link to={`/products/${props.type}/${props.id}`}>
                    <img src={props.urlImg} className="prodImg"></img>
                    <h3><Link to={`/products/${props.type}/${props.id}`}>{props.product}</Link></h3>
                    <p>${props.price}</p>
                    <p>12 cuotas de ${props.payments}</p>
                    <p>Stock disponible: {props.stock} unidad/es</p>
                    </Link>    
                </div>
            </div>
        </div>
    )
}