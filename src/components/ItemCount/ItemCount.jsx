import { Button } from '@chakra-ui/react'
import { useState } from 'react'
const ItemCount = () => {
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
        <div>
            <Button colorScheme='teal' size= 'xs' onClick={restar}>
                -
            </Button>
            <Button onClick={mostrarMensaje}>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size= 'xs' onClick={sumar}>
                +
            </Button>
        </div>
    )
}

export default ItemCount