import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, deleteProducts } = useContext(CartContext);
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      // Aquí deberías obtener los valores de nombre y correo electrónico del formulario
      nombre: e.target.elements.nombre.value,
      email: e.target.elements.email.value,
    };

    const order = {
      cliente: data,
      productos: cart,
      total: totalPrice(),
    };

    const ordersCollection = collection(db, "orden");

    <div>
      return (
      <h1>Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Ingresá tu nombre" />
        <input type="email" name="email" placeholder="Ingresá tu e-mail" />
      )
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
      {orderId && <p>¡Compra realizada con éxito! Número de orden: {orderId}</p>}
    </div>
}
}

export default Checkout
