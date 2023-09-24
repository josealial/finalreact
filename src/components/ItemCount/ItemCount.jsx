import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className='contador'>
                <button className='btnCont' onClick={ decrementar }> - </button>
                <p className='numContador'> {contador} </p>
                <button className='btnCont' onClick={ incrementar }> + </button>
            </div>
            <Link className='miBtn miBtn-black miBtn-animate' onClick={() => funcionAgregar(contador)}> Agregar al Carrito </Link>
        </>
    )
}

export default ItemCount