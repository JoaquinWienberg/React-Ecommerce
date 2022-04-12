import { useState, createContext} from "react";

const CartContext = createContext();

const CartShowcase = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItemToCart = (item) => {
        console.log("Producto agregado: ", item)
        const repeat = cartList.find(cartList => cartList.id == item.id)
        !repeat && setCartList(cartList => [...cartList, item])
    }

    const remItemFromCart = (item) => {
        setCartList(cartList.filter(cartItem => cartItem.id !== item.id))
    }

    const clear = () => {
        setCartList([])
    }

    const cartInfo = {
        cartList,
        addItemToCart,
        clear,
        remItemFromCart
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}

export { CartShowcase }
export default CartContext