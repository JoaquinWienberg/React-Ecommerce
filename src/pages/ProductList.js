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
                    <Link to={"./GPU"} className="categoryItem">Placas de video</Link>
                </div>
                <div className="category">
                    <Link to={"./RAM"} className="categoryItem">Memorias Ram</Link>
                </div>
                <div className="category">
                    <Link to={"./coolerCPU"} className="categoryItem">Coolers de CPU</Link>
                </div>
                <div className="category">
                    <Link to={"./CPU"} className="categoryItem">Procesadores</Link>
                </div>
            </div>
            <Box sx={{ width: "100%"}}>
                <Grid container spacing={0} justifyContent="space-between">
                    <Grid item xs={12} md={2} justifyContent="center">
                            <div className="hexBox">
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                                <div className="hexagon"></div>
                            </div>
                    </Grid>
                    <Grid item xs={12} md={8} container spacing={1} justifyContent="space-around">
                            <ProductList/>
                    </Grid>
                    <Grid item xs={12} md={2} justifyContent="center">
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