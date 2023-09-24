import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import carro from'../../assets/carrito.png';
const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);


    return (

        <Link to='/cart' className='btnCarrito'>
            <img className="imgCarrito" src={carro} alt="Carrito" />
            {
                totalCantidad > 0 && <span className='numeroCarrito'> {totalCantidad}</span>
            }           
        </Link>
    )
}
export default CartWidget