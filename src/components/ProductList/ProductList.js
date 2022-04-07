import Card from "../Card/Card";
import Box from '@mui/material/Box';
import data from "./ProductDatabase.JSON";
import React,{useState, useEffect} from "react";




const ProductList = (props) => {
    
    const url = "https://run.mocky.io/v3/2f850c35-595f-43c8-ba56-7cd21c8acc19";
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
    console.log(availableStock)
    //console.log(ProductDatabase)
    return(
        <div>
            <Box sx={{p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, color: "#3f51b5", fontSize: 30}}>{props.productType}</Box>
            <Box sx={{display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
                {availableStock.map((currentItem) => {
                    return <Card id={currentItem.id} key ={currentItem.id} product={currentItem.product} type={currentItem.type} price={currentItem.price} payments={currentItem.payments} stock={currentItem.stock} urlImg={currentItem.url}/>
                })}
            </Box>
        </div> 
    )
}

export default ProductList;