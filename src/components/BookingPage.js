import BookingForm from "./BookingForm";
const Reservations = (props) => {

    return (
        <div className="hero">
            <div className="container">
                <BookingForm state={props.state} setTimes={props.setTimes}/>
            </div>
        </div>
    )
}

export default Reservations;