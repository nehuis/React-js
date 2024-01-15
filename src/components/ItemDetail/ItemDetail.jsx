import { Card, Heading, CardBody, Text, CardFooter, Stack, Divider, ButtonGroup } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ product }) => {
    const {cart, addToCart} = useContext(CartContext)

    const quantityInCart = () => {
        return cart.reduce((acc, product) => acc + product.contador, 0)
    }
    const [contador] = useState(quantityInCart)

    return (
        <div>
            <Card maxW='sm' className='detail'>
                <CardBody className='body'>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            {product.Nombre}
                        </Heading>
                        <Text>{product.Descripcion}</Text>
                        <Text color='blue.600' fontSize='2xl'>{product.Precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='footer'>
                    <ButtonGroup spacing='2'>
                        <ItemCount
                        handleAdd={() => {addToCart(product, contador)}}
                        />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail