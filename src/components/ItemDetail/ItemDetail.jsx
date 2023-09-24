import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, title, price, image, description, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, title , price, image };
    agregarProducto(item, cantidad, image);
  }

  return (
    <div className='contenedorItem'>
      <img src={image} alt={title} />
      <div className='conteDescrip'>
        <h2 className='title'>{title} </h2>
        <p className='descrip'>{description}</p>
        <h3 className='parraf'>Precio: S$U {price} </h3>
        <h3 className='parraf'>Stock disponible: {stock} </h3>
        <hr className='hr' />
        {

          agregarCantidad > 0 ? (<Link className='miBtn miBtn-black miBtn-animate' to="/cart"> Ir al Carrito </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
        {
          agregarCantidad > 0 && (<Link className="miBtn miBtn-black miBtn-animate" to="/"> Seguir Comprando </Link>)
        }
      </div>
    </div>
  )
}

export default ItemDetail