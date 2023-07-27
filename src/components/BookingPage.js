import BookingForm from "./BookingForm";
const Reservations = (props) => {

    return (
        <div className="hero">
            <div className="container">
                <BookingForm submitForm={props.submitForm}/>
            </div>
        </div>
    )
}

export default Reservations;