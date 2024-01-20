import React, { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import "../Checkout/Checkout.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [alert, setAlert] = useState("none")
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  };

  const order = {
    cliente: { nombre, email, telefono },
    items: cart,
  };

  const ordersCollection = collection(db, "orden");

  return (
    <div>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        display={alert}
        className="alerta"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          ¡Compra realizada con éxito!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Gracias por comprar en Caran Autopartes<br />
          El ID de su compra es: {orderId}
        </AlertDescription>
      </Alert>
      <h1 className={`textito ${alert !== "none" ? "hidden" : "visible"}`}>
        Complete el siguiente formulario para finalizar su compra
      </h1>
      <form action="" onSubmit={handleSubmit} className={`form-checkout ${alert === "none" ? "visible" : "hidden"}`}>
        <input
          type="text"
          className="controls"
          placeholder="Nombre"
          required
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input
          type="email"
          className="controls"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="tel"
          className="controls"
          placeholder="Teléfono"
          required
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <button className="send" onClick={() => setAlert('')}>Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
