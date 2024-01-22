import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Button } from '@chakra-ui/react'
import './cart.css'
import { Link } from 'react-router-dom'

const cart = () => {

  const { cart, totalPrice, deleteProducts } = useContext(CartContext)
  const cleanCart = () => {
    deleteProducts()
  }

  return (
    <div>
      {
        cart.map((p) => {
          return (
            <div key={p.id} className='cart-product'>
              <br />
              <h2>{p.Nombre}</h2>
              <p>Precio Unitario: ${p.Precio}</p>
              <p>Precio Total: ${p.Precio * p.contador}</p>
              <p>Cantidad: {p.contador}</p>
              <br />
              </div>
            )
          })
        }

        { cart.length > 0 ?
          <>
            <h2 className='total'>Precio total: ${totalPrice()}</h2>
            <button onClick={cleanCart} className='botoncito'>Eliminar productos</button> 
            <Link to="/checkout" className='finish'>Comprar</Link>
          </> :
          <h2 className='empty'>
            Carrito vacío
            <Link to={"/"}><Button className='volver'>Volver al catálogo</Button></Link>
          </h2>
        }
      </div>
    )
  }

export default cart