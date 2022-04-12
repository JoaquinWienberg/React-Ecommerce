import ProductList from '../components/ProductList/ProductList';
import { Link } from 'react-router-dom';
import "./ProductList.css";
import "./GlobalDeco.css";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Catalog(props){

    return (
        <div className="productList">
            <h2>Nuevos ingresos</h2>
            <h3>Ver por categoria:</h3>
            <div className="categoryList">
                <div className="category">
                    <Link to={"./GPU"}>Placas de video</Link>
                </div>
                <div className="category">
                    <Link to={"./RAM"}>Memorias Ram</Link>
                </div>
            </div>
            <Box sx={{ flexgrow:1}}>
                <Grid container spacing={0} justifyContent="center">
                    <Grid item xs="auto">
                            <div className="hexBox">
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                            </div>
                    </Grid>
                    <Grid item xs={6}>
                            <ProductList/>
                    </Grid>
                    <Grid item xs="auto">
                            <div className="hexBox">
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                            </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}