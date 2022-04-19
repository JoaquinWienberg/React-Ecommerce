import React,{useState, useEffect} from "react";
import {collection, getDocs } from "firebase/firestore"
import db from "../../Firebase"

const CurrentStock = () => {
    
    const url = "https://run.mocky.io/v3/2f850c35-595f-43c8-ba56-7cd21c8acc19" //"https://run.mocky.io/v3/7c4905cb-954c-482a-a437-4ff692285f99";
    const [availableStock, setavailableStock] = useState([]);
    
    const getItem = async () => {       //Imports the updated stock from Mocky
        const itemDB = collection(db, 'products');
        const itemsSnapshot = await getDocs(itemDB);
        const stock = itemsSnapshot.docs.map((doc) => {
            let item = doc.data()
            item.id = doc.id
            console.log(item)
            return item
        });
        //const response = await fetch(url);
        //const stock = await response.json();
        return stock;
    }

    /*const newProducts = () => {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getItem())
            }, 0);
        })
    };*/

    useEffect ( () => {
        getItem().then((stock) => {
            setavailableStock(stock)
        })
    }, [])

    return availableStock
}

export default CurrentStock

