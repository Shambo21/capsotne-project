import logo from "../assets/Logo.svg"
function Nav() {
   return  (
            <nav className="container">
                <ul className="list-class">
                    <li><img src={logo}alt="" /></li>
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#menu">Menu</a></li>
                    <li><a href="/#reservtions">Reservations</a></li>
                    <li><a href="/#order-online">Order Online</a></li>
                    <li><a href="/#login">Login</a></li>
                </ul>
            </nav>
    )
}
export default Nav