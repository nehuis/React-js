import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemCount = ({product}) => {

    const {sumarProductos, restarProductos, contador, addToCart } = useContext(CartContext)


    return (
        <div>
            <Button colorScheme='teal' size= 'xs' onClick={restarProductos}>
                -
            </Button>
            <Button onClick={() => addToCart(product)}>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size= 'xs' onClick={sumarProductos}>
                +
            </Button>
        </div>
    )
}

export default ItemCount