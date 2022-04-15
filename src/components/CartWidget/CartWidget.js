import React,{ useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from '@mui/material/Button';
import "./CartWidget.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fade from '@mui/material/Fade';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../MuiStyle/Themes"
import IconButton from '@mui/material/IconButton';

export default function CartWidget (props){

    const {cartList, cartTotal, clear, remItemFromCart, calculateTotal} = useContext(CartContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


    if (cartList.length == 0) {
        return null
    } else {
        return (
            <div>
            
                <ShoppingCartIcon 
                    onClick={handleClick}
                    size="small"
                    sx={{ mr: 1 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                />
                {cartList.length}
                <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                >
                <span>Productos en carro:</span>
                <Divider />
                {cartList.map((item, i) => {
                    return (
                        <MenuItem onClick={handleClose} key={i} className="widget-item">
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Importe total: {item.total}</p>
                            <IconButton size="small" sx={{marginLeft:"4px"}} variant="contained" component="span" aria-label="delete" color="secondary" onClick={() => remItemFromCart(item)}><DeleteIcon /></IconButton>
                        </MenuItem>
                    )
                    })
                }
                    <MenuItem  sx={{background: "black", color: "white", fontSize:"10px"}}>
                    <div className="widget-total">Total del pedido: {cartTotal}</div>
                    <Button size="small" variant="contained" component="span" color="primary" onClick={clear} className="clear" sx={{marginLeft:"4px"}}>Limpiar carro</Button>
                    </MenuItem>
                </Menu>
            </div>
    )}
}