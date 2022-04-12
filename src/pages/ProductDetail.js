import CardDetail from "../components/CardDetail/CardDetail";
import { useParams } from "react-router-dom";
import CurrentStock from '../components/StockDatabase/Stock';
import React,{useState, useEffect} from "react";


export default function ProductDetail () {

    const ProductDB = CurrentStock();
    const {id, category} = useParams();
    const [inventory, setInventory] = useState ({});

    useEffect ( () => {
        const database = ProductDB;
        productId(database, id)
    }, [ProductDB])

    const productId = (dbase, id) => {
        return dbase.filter( (item) => {
            if (item.id == id) {
                if (item.type == category) {
                    return setInventory(item)
                }
            }
        })
    }
    
    return (
            <CardDetail product={inventory.product} price={inventory.price} desc={inventory.desc} payments={inventory.payments} urlImg={inventory.url} stock={inventory.stock} id={inventory.id}/>
    )
}