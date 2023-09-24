import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Faltan datos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("El correo de confirmación no coincide");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "e-ticket"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear el ticket", error);
                setError("Error al procesar la orden");
            });
    }

    return (
        <div id="container">
            <h1>&bull; Checkout &bull;</h1>
            <div className="underline"></div>
            <form onSubmit={manejadorSubmit} id="contact_form">
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>Precio Unitario: $ {producto.item.precio}</p>
                        <p>Precio total: $ {producto.item.precio * producto.cantidad}</p>
                        <hr />
                    </div>
                ))}
                <h3>Cantidad: {cantidadTotal} Products</h3>
                <h3>Total: ${total}</h3>
                <hr />
                <div className="eTicket">
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Nombre" name="name" id="name_input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="eTicket">
                    <label htmlFor="apellido"></label>
                    <input type="text" placeholder="Apellido" name="apellido" id="email_input" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="eTicket">
                    <label htmlFor="telephone"></label>
                    <input type="text" placeholder="Telefono" name="telephone" id="telephone_input" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="eTicket">
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Email" name="email" id="email_input" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="eTicket">
                    <label htmlFor="emailconfirmacion"></label>
                    <input type="email" placeholder="Email Confirmación" name="emailconfirmacion" id="email_input" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button className="submit" type="submit" value="Send Message" id="form_button"> Finalizar Orden </button>
                {ordenId && (
                    <strong>¡Gracias por tu compra en REACT-SHIRTS! Tu E-ticket: {ordenId}</strong>
                )}
            </form>
        </div>
    );
}

export default Checkout;
