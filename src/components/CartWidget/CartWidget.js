import React,{ useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from '@mui/material/Button';
import "./CartWidget.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';

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

    const cartQuantity = cartList.reduce(function(previousQ, currentQ){
        return previousQ + currentQ.quantity
    } ,0)


    if (cartList.length == 0) {
        return (            
            <div>            
                <ShoppingCartIcon 
                    onClick={handleClick}
                    size="small"
                    sx={{ mr: 1, color: red[50] }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                />
                {cartQuantity}
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
                <span className="widgetText">No hay productos</span>
                </Menu>
            </div>
        )
    } else {
        return (
            <div>            
                <ShoppingCartIcon 
                    onClick={handleClick}
                    size="small"
                    sx={{ mr: 1, padding:"0", color: red[50] }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                />
                {cartQuantity}
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={{p: 0}}
                >
                    <div className="widget-total">Productos en carro:</div>
                    <Divider />
                    {cartList.map((item, i) => {
                        return (
                            <MenuItem onClick={handleClose} key={i} className="widget-item">
                                <p>{item.title}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Importe total: {item.total.toLocaleString()}</p>
                                <IconButton size="small" sx={{marginLeft:"4px"}} variant="contained" component="span" aria-label="delete" color="secondary" onClick={() => remItemFromCart(item)}><DeleteIcon /></IconButton>
                            </MenuItem>
                        )
                        })
                    }
                        <Box  sx={{background: "black", color: "white", fontSize:"10px", display:"flex" , padding:"2px", alignItems:"center"}}>
                            <div className="widget-total">Total del pedido: {cartTotal.toLocaleString()}</div>
                            <Button size="small" variant="contained" component="span" color="secondary" onClick={clear} className="clear" sx={{marginLeft:"4px"}}>Limpiar carro</Button>
                            <Button size="small" variant="contained" component="span" color="secondary"  className="clear" sx={{marginLeft:"4px"}}><Link to={"/Cart"} >Confirmar Compra</Link></Button>
                        </Box>
                </Menu>
            </div>
    )}
}