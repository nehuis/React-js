import { Card, CardBody, Stack, Heading, CardFooter, ButtonGroup, Button } from "@chakra-ui/react"
import '../Item/item.css'
import { Link } from "react-router-dom"

const Item = ({ titulo, id }) => {
    return (
        <div>
            <Card className='card' maxW='sm'>
                <CardBody className='card-body'>
                    <Stack className='card-info' mt='6' spacing='3'>
                        <Heading size='md'>{titulo}</Heading>
                    </Stack>
                </CardBody>
                <CardFooter className='card-footer'>
                    <ButtonGroup className='botones' spacing='2'>
                        <Button>
                            <Link to={`/producto/${id}`}>
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