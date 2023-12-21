import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const { categoryId } = useParams()

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

  const productosFiltrados = productos.filter((producto) => producto.category == categoryId)
  console.log(productosFiltrados)

    return (
      <div>
        {
          categoryId ? <ItemList productos={productosFiltrados}/>: <ItemList productos={productos}/>
        }
      </div>
    );
  };

export default ItemListContainer;
