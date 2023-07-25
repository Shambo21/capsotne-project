import mainpic from "../assets/restauranfood.jpg"
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <section className="list-class">
                    <article>
                        <p className="header-text">Little Lemon</p>
                        <p className="subheader">Chicago</p>
                        <p className="subtext">We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist</p>
                        <Link to="/reservations"><button type="button" className="primary-button ">Reserve A Table</button></Link>
                    </article>
                    <article>
                        <img src={mainpic} alt="" id="main-pic" />
                    </article>
                </section>
            </div>
        </div>
    )

}


export default Hero;