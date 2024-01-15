import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const  { id } = useParams()

    useEffect(() => {

        const db = getFirestore()

        const oneItem = doc(db, "repuestos", `${id}`)
        getDoc(oneItem)
            .then((snapshot) => {
                setProduct(
                    { ...snapshot.data(), id: snapshot.id}
                )
            })
        }, [id])

    return (
        <div>
            {product && <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer