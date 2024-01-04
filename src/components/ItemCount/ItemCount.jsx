import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'

const ItemCount = () => {

    const {sumar, restar, mostrarMensaje, contador} = useContext(CartContext)

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