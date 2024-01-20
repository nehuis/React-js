import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer.css'
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState("false")

  useEffect(() => {
    setLoading(true)

    const db = getFirestore()

    const itemsCollection = collection(db, "repuestos")

    const productosFiltrados = categoryId ? query(itemsCollection, where("categoryId", "==", categoryId)) : itemsCollection

    getDocs(productosFiltrados).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            setLoading(false)
            return {...doc.data(), id: doc.id}
          })
        )
    })
}, [categoryId])

    return (
      <div>
        {
          loading ? <Loader /> :
          <ItemList productos={products}/>
        }
      </div>
    );
  };

export default ItemListContainer;
