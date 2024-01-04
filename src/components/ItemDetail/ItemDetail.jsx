import { useContext, useState } from 'react'
import { Card, Heading, CardBody, Text, CardFooter, Stack, Divider, ButtonGroup} from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../Context/cartContext'

const ItemDetail = ({ producto }) => {

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const producto = { id: producto.id, titulo: producto.titulo, precio: producto.precio }
        addItem(producto, quantity)
        console.log(handleOnAdd)
    }

    return (
        <div>
            <Card maxW='sm' className='detail'>
                <CardBody className='body'>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.titulo}</Heading>
                        <Text>{producto.descripcion}</Text>
                        <Text color='blue.600' fontSize='2xl'></Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='footer'>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail