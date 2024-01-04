import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
    cart: []
}) 

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log (cart)

    const addItem = (producto, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...producto, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(producto => producto.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    } 

    const isInCart = (id) => {
        return cart.some(producto => producto.id === id)
    }

    const [contador, setContador] = useState(0)

    const mostrarMensaje = () => {
        alert(`agregado al carrito ${contador} unidades`)
    }

    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, mostrarMensaje, sumar, restar, contador }}>
            { children }
        </CartContext.Provider>
    )
}