import React,{ useState, useEffect } from "react";
import Button from '@mui/material/Button';
import ItemCount from "../ItemCount/ItemCount";
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardDetail from "../CardDetail/CardDetail";

export default function CardListContainer (props){

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

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, flexDirection: "column", Width:"70%", alignItems:"center" }}>
                {availableStock.map((currentItem) => {
                    return <CardDetail key ={currentItem.id} product={currentItem.product} price={currentItem.price} payments={currentItem.payments} stock={currentItem.stock} desc={currentItem.desc} urlImg={currentItem.url}/>
                })}
            </Box>
        </div>
    )
    
}