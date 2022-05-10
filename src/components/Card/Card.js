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
                    <h3>{props.product}</h3>
                    <p className="itemPrice">${props.price.toLocaleString()}</p>
                    <p>12 cuotas de ${props.payments.toLocaleString()}</p>
                    <p>Stock disponible: {props.stock} unidad/es</p>
                    </Link>
                    <Link to={`/products/${props.type}/${props.id}`} className="goToDetail">
                        Comprar
                    </Link>
                </div>
            </div>
        </div>
    )
}