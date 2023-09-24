import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='tituloCard'>{nombre}</h3>
            <p className='precio'>Precio: $ {precio} </p> 
            <p className='Udisponibles'>Unidades Disponibles: {stock}</p>
            <hr className='hrItem'/>           
            <Link to={`/item/${id}`} className='btnProducto'>Ver Detalles</Link>
        </div>
    )
}

export default Item