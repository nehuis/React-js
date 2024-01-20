import React from 'react'
import { Spinner } from '@chakra-ui/react'
import '../Loader/Loader.css'

const Loader = () => {
    return (
        <div className='loading'>
            <Spinner
                thickness='4px'
                speed='0.70s'
                emptyColor='gray.200'
                color='red'
                size='xl'
            />
        </div>
    )
}

export default Loader