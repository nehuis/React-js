import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div>
      <h1>cart</h1>
      {
        cart.map((p) => {
          return (
            <div key={p.id} className='cart-product'>
            <h2>{p.Nombre}</h2>
            <p>Precio Unitario:${p.Precio}</p>
            <p>Precio Total:${p.Precio * p.contador}</p>
            <p>Cantidad: {p.contador}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default cart