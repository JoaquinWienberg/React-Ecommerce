import React,{useState, useEffect} from "react";
import {collection, getDocs } from "firebase/firestore"
import db from "../../Firebase"

const CurrentStock = () => {
    
    
    const [availableStock, setavailableStock] = useState([]);
    
    const getItem = async () => {       //Imports the updated stock from Firebase
        const itemDB = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemDB);
        const stock = itemsSnapshot.docs.map((doc) => {
            let item = doc.data()
            item.id = doc.id
            console.log(item)
            return item
        });
        return stock;
    }


    useEffect ( () => {
        getItem().then((stock) => {
            setavailableStock(stock)
        })
    }, [])

    return availableStock
}

export default CurrentStock

