import React from 'react'
import { Spinner } from '@chakra-ui/react'

const loader = () => {

  const loading = true


  return (
    <div>
      {loading ? <Spinner/> : <h1>No hay spinner</h1>}
    </div>
  )
}

export default loader