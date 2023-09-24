import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const products = categoryId ? query(collection(db, "products"), where("products", "==", categoryId)) : collection(db, "products");

    getDocs(products)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [categoryId])

  return (
    <div>
      <h2 className="ItemsContainer"> {greeting} </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer