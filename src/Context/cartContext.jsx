import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [contador, setContador] = useState(0)
    const [newContador, setNewContador] = useState(0)

    const addToCart = (product) => {
        const { id: productId, ...rest } = product
        const id = productId || generateRandomId() 
        const itemAdd = { id, ...rest, contador: newContador }

        const isInCart = cart.find((item) => item.id === id)
        if (isInCart) {
            const updatedCart = cart.map((item) =>
                item.id === id ? { ...item, contador: item.contador + newContador } : item
            )
            setCart(updatedCart)
        } else {
            setCart([...cart, itemAdd])
        }
    }

    const sumarProductos = () => {
        if (contador < 10) {
            setContador(contador + 1)
            setNewContador(contador + 1)
        }
    }

    const restarProductos = () => {
        if (contador > 0) {
            setContador(contador - 1)
            setNewContador(contador - 1)
        }
    }

    const updateNewContador = (value) => {
        setNewContador(value)
    }

    const generateRandomId = () => {
        return Math.random().toString(36).substring(2, 15);
    };

    const quantityInCart = () => {
        return cart.reduce((acc, product) => acc + product.contador, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.Precio * prod.contador, 0)
    }

    const deleteProducts = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, setCart, sumarProductos, restarProductos, contador, newContador,  addToCart, quantityInCart, deleteProducts, totalPrice, updateNewContador, }}>
            {children}
        </CartContext.Provider>
    )
}
