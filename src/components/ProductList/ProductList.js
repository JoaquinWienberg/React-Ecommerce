import Card from "../Card/Card";
import Box from '@mui/material/Box';
import * as React from 'react';


const ProductList = (props) => {
    return(
        <div>
            <Box sx={{p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, color: "#3f51b5", fontSize: 30}}>{props.productType}</Box>
            <Box sx={{display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
                <Card product="Placa de video MSI RTX 3070 TI" price={250000} payments={20833} stock={5} />
                <Card product="Placa de video EVGA RTX 3080" price={350000} payments={29166} stock={2}/>
                <Card product="Placa de video AORUS RTX 3060" price={170000} payments={14166} stock={9}/>
            </Box>
        </div> 
    )
}


export default ProductList;