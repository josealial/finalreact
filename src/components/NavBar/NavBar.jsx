import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <label>
                    <Link to='/'>
                        <img className='Logo' src={Logo} alt="Logo" />
                    </Link>
                </label>

                <ul className="navbar-list">
                    <h3>ReacT-shirts</h3>
                    <li><NavLink to={`/products/t-shirts`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>T-shirts</NavLink></li>
                    <li><NavLink to={`/products/pants`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pants</NavLink></li>
                    <li><NavLink to={`/products/jackets`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Jackets</NavLink></li>
                    <li>

                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}


export default Navbar