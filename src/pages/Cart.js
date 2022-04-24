import React,{ useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Button from '@mui/material/Button';
import "./Cart.css";
import FormDialog from "../components/Modal/Modal";
import db from "../Firebase"
import {collection, addDoc } from "firebase/firestore"

export default function Cart (props){

    const {cartList, cartTotal, clear, remItemFromCart, calculateTotal} = useContext(CartContext);
    const [clientInfo, setClientInfo] = useState ({
        name: "",
        phone: "",
        email: "",
        location: "",
        zipcode: "",
    })
    const [orderComplete, setCompleteOrder] = useState(false)
    const [orderCode, setOrderCode] = useState()

    const createOrder = async(order) => {
        const firebaseOrder = collection(db, "orders")
        const confirmOrder = await addDoc(firebaseOrder, order)
        console.log("orden generada: ", confirmOrder.id)
        setOrderCode(confirmOrder.id)
        setCompleteOrder(true)
    }  

    const confirmPurchase = (data) => {
        setClientInfo(data)
        const date = new Date();
        const order = {
            total: cartTotal, 
            buyer: data,
            date: date,
            items: cartList.map ((cartList) =>{
                return{
                    id: cartList.id,
                    product: cartList.product,
                    price:cartList.price,
                }
            }),
        }
        createOrder(order)
    }

    

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
                {orderComplete ? (
                <h3>La orden ha sido completada! Su numero de orden es: {orderCode}</h3>
                ) : (
                <Button variant="contained" component="span" color="primary" onClick={clear} className="clear">Limpiar carro</Button>,
                <FormDialog action={confirmPurchase}/>
            )}
        </div>
    )
}


/*

const [purchase, setPurchase] = useState (
        {
            total: cartTotal, 
            buyer: clientInfo,
            items: cartList.map ((cartList) =>{
                return{
                    id: cartList.id,
                    product: cartList.product,
                    price:cartList.price,
                }
            }),
        }
    )

    */