import Card from "../Card/Card";
import React,{useState, useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {collection, getDocs } from "firebase/firestore"
import db from "../../Firebase"
import Grid from '@mui/material/Grid';




const ProductList = (props) => {
    
    const url = "https://run.mocky.io/v3/2f850c35-595f-43c8-ba56-7cd21c8acc19";
    const [availableStock, setavailableStock] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItem = async () => {       //Imports the updated stock from Firebase
        const itemDB = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemDB);
        const stock = itemsSnapshot.docs.map((doc) => {
            let item = doc.data()
            item.id = doc.id
            console.log(item)
            return item
        })
        return stock;
    }

    useEffect ( () => {
        getItem().then((stock) => {
            setLoading(false);
            setavailableStock(stock)
        })
    }, [])

    console.log(availableStock)

    return(
        <div>
            { loading ? 
                <div>
                    <h2>Cargando productos...</h2>
                    <CircularProgress />
                </div> 
                : 
                <Grid container spacing ={0}>
                    {availableStock.map((currentItem) => {
                        return  <Grid item xs={12} md={6} lg={4} xl={3} sx={{overflow:"visible"}}><Card id={currentItem.id} key ={currentItem.id} product={currentItem.product} type={currentItem.type} price={currentItem.price} payments={currentItem.payments} stock={currentItem.stock} urlImg={currentItem.url}/></Grid>
                    })}
                </Grid> 
            }
        </div> 
    )
}

export default ProductList;