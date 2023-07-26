import logo from "../assets/Logo.svg"
import {Link} from 'react-router-dom'
const Nav = () => {
   return  (
            <nav className="container">
                <ul className="list-class">
                    <li><img src={logo}alt="" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
    )
}
export default Nav