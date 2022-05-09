import { useState, createContext, useEffect} from "react";

const CartContext = createContext();

const CartShowcase = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (item) => {
        console.log("Producto agregado: ", item)
        const repeat = cartList.find(cartList => cartList.id == item.id)
        !repeat && setCartList(cartList => [...cartList, item])
        !repeat && calculateTotal(item);
    }

    const remItemFromCart = (item) => {
        setCartList(cartList.filter(cartItem => cartItem.id !== item.id))
        setCartTotal(cartTotal - item.total)
    }

    const clear = () => {
        setCartList([])
        setCartTotal(0)
    }

    const calculateTotal = (item) => {
        setCartTotal(cartTotal + item.total)
    }

    const deleteCart = () =>    {
        setCartList([])
        setCartTotal(0)
    }


    const cartInfo = {
        cartList,
        cartTotal,
        addItemToCart,
        clear,
        remItemFromCart,  
        calculateTotal,
        deleteCart,      
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}

export { CartShowcase }
export default CartContext