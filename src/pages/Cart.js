import React,{ useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import Button from '@mui/material/Button';
import "./Cart.css";
import FormDialog from "../components/Modal/Modal";
import db from "../Firebase"
import {collection, addDoc } from "firebase/firestore";
import {ThemeProvider } from '@mui/material/styles';
import theme from "../components/MuiStyle/Themes"

export default function Cart (props){

    const {cartList, cartTotal, clear, remItemFromCart, calculateTotal, deleteCart} = useContext(CartContext);
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
        deleteCart()
    }

    

    return(
        <div className="itemContainer">

                <h1>Carrito actual: </h1>
                {cartList.map((item, i) => {
                    return (<div key={i} className="item">
                                <img src={item.urlImg}></img>
                                <p>{item.title}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Importe total: {item.total.toLocaleString()}</p>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" component="span" color="secondary" size="small" onClick={() => remItemFromCart(item)}>Eliminar</Button>
                                </ThemeProvider>
                            </div>                        
                            )})
                }
                <div className="totalPrice">Total del pedido: {cartTotal.toLocaleString()}</div>
                {orderComplete ? (
                <h3>La orden ha sido completada! Su numero de orden es: {orderCode}</h3>
                ) : (
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" component="span" color="primary" onClick={clear} className="clear">Limpiar carro</Button>
                        { parseInt(cartTotal) > 0 && 
                            <FormDialog action={confirmPurchase}/>                        
                        }
                    </ThemeProvider>
            )}
        </div>
    )
}


