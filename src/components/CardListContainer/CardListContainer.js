import React,{ useState, useEffect } from "react";
import Box from '@mui/material/Box';
import CardDetail from "../CardDetail/CardDetail";

export default function CardListContainer (props){

    const url = "https://run.mocky.io/v3/2f850c35-595f-43c8-ba56-7cd21c8acc19" //https://run.mocky.io/v3/7c4905cb-954c-482a-a437-4ff692285f99;
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
            }, 200);
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
                    return <CardDetail id={currentItem.id} key ={currentItem.id} product={currentItem.product} price={currentItem.price} payments={currentItem.payments} stock={currentItem.stock} desc={currentItem.desc} urlImg={currentItem.url}/>
                })}
            </Box>
        </div>
    )
    
}