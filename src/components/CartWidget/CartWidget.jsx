import { useContext } from 'react'
import cart from '../Multimedia/cart.svg'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const {quantityInCart} = useContext(CartContext)

    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            <span> {quantityInCart()} </span>
        </div>
    )
}

export default CartWidget