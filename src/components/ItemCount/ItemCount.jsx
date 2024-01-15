import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemCount = () => {

    const {sumarProductos, restarProductos, contador, addToCart } = useContext(CartContext)


    return (
        <div>
            <Button colorScheme='teal' size= 'xs' onClick={restarProductos}>
                -
            </Button>
            <Button onClick={addToCart}>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size= 'xs' onClick={sumarProductos}>
                +
            </Button>
        </div>
    )
}

export default ItemCount