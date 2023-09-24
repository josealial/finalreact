import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className="container-carrito">
                    <h2>No hay productos en el carrito </h2>
                    <Link className="miBtn miBtn-white miBtn-animate" to='/'> Ir a Comprar Productos </Link>
                </div>
            </>
        )
    }

    return (
        <div className="container-carrito">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3> Total: $ {total}  </h3>
            <h3> Cantidad Total: {cantidadTotal} Productos</h3>
            <hr className="hrcarrito"/>
            <div>
                <Link className="miBtn miBtn-white miBtn-animate" onClick={() => vaciarCarrito()}> Vaciar Carrito </Link>
                <Link className="miBtn miBtn-white miBtn-animate" to="/checkout"> Finalizar Compra </Link>
                <Link className="miBtn miBtn-white miBtn-animate" to="/"> Seguir Comprando </Link>
            </div>
        </div>
    )
}

export default Cart