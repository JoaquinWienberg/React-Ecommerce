import Card from "../Card/Card";
import Box from '@mui/material/Box';
import data from "./ProductDatabase.JSON";
import React,{useState, useEffect} from "react";




const ProductList = (props) => {
    
    const url = "https://run.mocky.io/v3/f881e80a-f38d-49e3-a8c3-878b245013db";
    const [availableStock, setavailableStock] = useState([]);
    
    const getItem = async () => {       //Imports the updated stock from Mocky
        const response = await fetch(url);
        const stock = await response.json();
        return stock;
    }

    const newProducts = () => {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getItem())
            }, 2000);
        })
    };

    useEffect ( () => {
        newProducts().then((stock) => {
            setavailableStock(stock)
        }).finally(() => {
            console.log(".Finally done")
        })
    }, [])
    console.log(availableStock)
    //console.log(ProductDatabase)
    return(
        <div>
            <Box sx={{p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, color: "#3f51b5", fontSize: 30}}>{props.productType}</Box>
            <Box sx={{display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
                {availableStock.map((currentItem) => {
                    return <Card key ={currentItem.id} product={currentItem.product} price={currentItem.price} payments={currentItem.payments} stock={currentItem.stock}/>
                })}
            </Box>
        </div> 
    )
}


/* const productDatabase = [{
                            id: 1,
                            product: "Placa de video MSI RTX 3070 TI",
                            price:250000,
                            payments: 20833,
                            stock: 5},
                        {
                            id: 2,
                            product: "Placa de video EVGA RTX 3080",
                            price:350000,
                            payments: 29166,
                            stock: 2},
                        {
                            id: 3,
                            product: "Placa de video AORUS RTX 3060",
                            price:170000,
                            payments: 14166,
                            stock: 9}]*/

export default ProductList;