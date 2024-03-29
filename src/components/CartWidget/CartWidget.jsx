import { useContext } from 'react'
import cart from '../Multimedia/cart.svg'
import '../CartWidget/CartWidget.css'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const {quantityInCart} = useContext(CartContext)

    return (
        <div>
            <img src={cart} alt="cart widget" className='carrito'/>
            <span className='numerito'> {quantityInCart()} </span>
        </div>
    )
}

export default CartWidget