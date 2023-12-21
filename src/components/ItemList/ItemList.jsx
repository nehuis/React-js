import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className='products'>
            {
                productos.map((p)=>{
                    return(
                        <Item
                        key={p.id}
                        titulo={p.titulo}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        id={p.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList