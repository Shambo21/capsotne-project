import React, { useState } from 'react'


const BookingForm = (props) => {
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = now.getFullYear() + "-" + (month) + "-" + (day)

    const [date, setDate] = useState(today)
    const [guests, setGuests] = useState(1);
    const [resTime, setResTime] = useState();
    const [occasion, setOccasion] = useState();
    const [availableTimes, setTimes] = useState(props.state)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation has been made")
    }
    return (
        <form id="reservation-form" onSubmit={handleSubmit} className='subtext'>
            <ul className='vert-list'>
                <li className='subheader'>Book Now</li>
                <li>
                    <label htmlFor="res-date">Choose date: </label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="res-time">Choose time: </label>
                    <select id="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>
                        {!availableTimes ? <option></option> : availableTimes.map((item)=><option key={item.key} value={item.value}>{item.value}</option>)}
                    </select>
                </li>
                <li>
                    <label htmlFor="guests">Number of guests: </label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1" max="10"
                        id="guests"
                        value={guests}
                        onChange={e => setGuests(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="occasion">Occasion: </label>
                    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                    </select>
                </li>
                <li>
                    <button id="reservation-button" className='primary-button' type="submit" >Make Reservation</button>
                </li>
            </ul>





        </form>
    )
}

export default BookingForm;