import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams()

    const productos = [
        {id: 1, titulo: "Producto A", category: "A", descripcion: "descripcion del producto a", precio: 1000},
        {id: 2, titulo: "Producto B", category: "A", descripcion: "descripcion del producto b", precio: 2000},
        {id: 3, titulo: "Producto C", category: "B", descripcion: "descripcion del producto c", precio: 3000},
        {id: 4, titulo: "Producto D", category: "B", descripcion: "descripcion del producto c", precio: 4000},
        {id: 5, titulo: "Producto E", category: "C", descripcion: "descripcion del producto c", precio: 5000},
        {id: 6, titulo: "Producto F", category: "C", descripcion: "descripcion del producto c", precio: 6000}
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.lenght > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject("No se obtuvieron productos")
        }
    })

    mostrarProductos
    .then((resultado) => {
        //console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })

    const productoFiltrado = productos.find((producto)=> producto.id == id)

    return (
        <div>
        <ItemDetail
            producto={productoFiltrado}
        />
    </div>
    )
}

export default ItemDetailContainer