import { Card, Heading, CardBody, Text, CardFooter, Stack, Divider, ButtonGroup, Image } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    return (
        <div className='detail'>
            <Card maxW='sm'>
                <Image 
                    src={product.Imagen}
                />
                <CardBody className='body'>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' className='title'> 
                            {product.Nombre}
                        </Heading>
                        <Text className='texto'>{product.Descripcion}</Text>
                        <Text color='black' fontSize='2xl' className='precio'>${product.Precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='footer'>
                    <ButtonGroup spacing='2' className='counter'>
                        <ItemCount product={product}/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail