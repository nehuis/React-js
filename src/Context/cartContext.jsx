import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, contador) => {
        const itemAdd = {...product, contador}

        const newCart = [...cart]
        
        const isInCart = cart.find((product) => product.id === itemAdd)
        if (isInCart) {
            isInCart.contador += contador
        } else {
            newCart.push(itemAdd)   
        }
        setCart([...cart, itemAdd])
    }
    console.log(cart)

    const [contador, setContador] = useState(0)

    const sumarProductos = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restarProductos = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const quantityInCart = () => {
        return cart.reduce((acc, product) => acc + product.contador, 0)
    }
    return (
        <CartContext.Provider value={{ cart, setCart, sumarProductos, restarProductos, contador, setContador,addToCart, quantityInCart}}>
            { children }
        </CartContext.Provider>
    )
}