import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer.css'
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "repuestos")

    const productosFiltrados = categoryId ? query(itemsCollection, where("categoryId", "==", categoryId)) : itemsCollection

    getDocs(productosFiltrados).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
    })
}, [categoryId])

    return (
      <div>
        <ItemList productos={products}/>
      </div>
    );
  };

export default ItemListContainer;
