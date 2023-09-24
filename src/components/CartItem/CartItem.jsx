import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom'
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="itemcarrito">      
      <h4 className="one"> {item.nombre} </h4>
      <div className="imgcarrito">
        <img className='imgProducto two' src={item.img} alt={item.nombre} />
      </div>
      <p className="three"> Cantidad: {cantidad} </p>
      <p className="four"> Precio: $ {item.precio} </p>
      <Link className="miBtn miBtn-white miBtn-animate five" onClick={() => eliminarProducto(item.id)}> Eliminar </Link>
    </div>
  )
}

export default CartItem