import logo from "../assets/footer-logo.png"

const Footer = () => {
   return (
        <footer className="container">
            <section className="list-class">
                <article>
                    <img src={logo} alt="" id="footer-image"/>
                </article>
                <article>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#menu">Menu</a></li>
                        <li><a href="/#reservtions">Reservations</a></li>
                        <li><a href="/#order-online">Order Online</a></li>
                        <li><a href="/#login">Login</a></li>
                    </ul>
                </article>
                <article>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="/#address">Address</a></li>
                        <li><a href="/#phone-number">Phone Number</a></li>
                        <li><a href="/#email">Email</a></li>
                    </ul>
                </article>
                <article>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/#address">Address</a></li>
                        <li><a href="/#phone-number">Phone Number</a></li>
                        <li><a href="/#email">Email</a></li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer;