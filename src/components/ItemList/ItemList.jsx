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
                        imagen={p.Imagen}
                        titulo={p.Nombre}
                        precio={p.Precio}
                        id={p.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList