import { Card, CardBody, Stack, Heading, CardFooter, ButtonGroup, Button, Image } from "@chakra-ui/react"
import '../Item/item.css'
import { Link } from "react-router-dom" 

const Item = ({ titulo, id, imagen }) => {
    return (
        <div>
            <Card className='card' maxW='sm'>
                <Image 
                    src={imagen}
                />
                <CardBody className='card-body'>
                    <Stack className='card-info' mt='6' spacing='3'>
                        <Heading size='md'>{titulo}</Heading>
                    </Stack>
                </CardBody>
                <CardFooter className='card-footer'>
                    <ButtonGroup className='botones' spacing='2'>
                        <Button>
                            <Link to={`/product/${id}`}>
                                Ver detalle
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item