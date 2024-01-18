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
            <Button onClick={cleanCart}>Eliminar productos</Button>
            <Link to="/checkout">Finalizar compra</Link>
          </> :
          <h2>Carrito vacio</h2>
        }
      </div>
    )
  }

export default cart