import React from 'react'
import { Card, Heading, CardBody, Text, CardFooter, Stack, Divider, ButtonGroup} from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {

    return (
        <div>
            <Card maxW='sm' className='card'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.titulo}</Heading>
                        <Text>{producto.descripcion}</Text>
                        <Text color='blue.600' fontSize='2xl'></Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail