import mainpic from "../assets/restauranfood.jpg"

function Main() {

    return (
        <div className="hero">
            <div className="container">
            <section className="list-class">
                <article>
                    <p className="header-text">Little Lemon</p>
                    <p className="subheader">Chicago</p>
                    <p className="subtext">We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist</p>
                </article>
                <article>
                    <img src={mainpic} alt="" id="main-pic"/>
                </article>
            </section>
            </div>
        </div>
    )
}

export default Main;