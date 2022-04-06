import { useParams } from "react-router-dom";
import CurrentStock from '../components/StockDatabase/Stock';
import React,{useState, useEffect} from "react";
import Card from "../components/Card/Card";
import "./Category.css"

export default function ProductCategory () {

    const ProductDB = CurrentStock();
    const {category} = useParams();
    const [inventory, setInventory] = useState ([]);

    useEffect ( () => {
        setInventory([]);
        const database = ProductDB;
        productType(database, category)
        console.log(ProductDB)
    }, [ProductDB, category])

    const productType = (dbase, category) => {
        return dbase.map( (item) => {
            if (item.type == category) {
                return setInventory(inventory => [...inventory, item]);
            }
        })
    }
    
    return (
        <div>
            <h2>Productos en stock</h2>
            <div className="categoryFilter">
                {inventory.map((item) => {
                    const {id} = item;
                    return (<Card key={id} product={item.product} price={item.price} payments={item.payments} stock={item.stock} type={item.type} id={item.id} />)
                } )}
            </div>
        </div>
        )
}