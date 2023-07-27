import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from './Main';
import { formatDates } from './formatDates';



const BookingForm = (props) => {
    const now = new Date();
    const today = formatDates(now)

    const [guests, setGuests] = useState(1);
    const [resTime, setResTime] = useState('');
    const [occasion, setOccasion] = useState('Birthday');
    const [date, setDate] = useState(today);
    const { state, dispatch } = useContext(MainContext);


    useEffect(() => {
        setDate(state.date)
    }, [state.date])

    if (!date) setDate(today)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation has been made")
        const submitVal = {
            resDate: date,
            resTime: resTime,
            guests: guests,
            occasion: occasion
        }
        const { submitForm } = props;
        submitForm(submitVal)
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
                        defaultValue={date}
                        onChange={e => dispatch({ type: 'get-times', date: e.target.value })}
                    />
                </li>
                <li>
                    <label htmlFor="res-time">Choose time: </label>
                    <select id="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>
                        {!state.items ? <option></option> : state.items.map((item) => <option key={item.key} value={item.value}>{item.value}</option>)}
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