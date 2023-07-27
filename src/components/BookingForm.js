import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from './Main';
import { formatDates } from './formatDates';



const BookingForm = (props) => {
    const now = new Date();
    const today = formatDates(now)

    const [guests, setGuests] = useState();
    const [resTime, setResTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const [date, setDate] = useState();
    const { state, dispatch } = useContext(MainContext);


    useEffect(() => {
        setDate(state.date)
    }, [state.date])

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitVal = {
            resDate: date,
            resTime: resTime,
            guests: guests,
            occasion: occasion
        }
        const { submitForm } = props;
        //setDate('')
        submitForm(submitVal);
    }

    const checkform = () => {
        var cansubmit = true;
        if (!date || !resTime || !guests || !occasion) cansubmit = false
        if (cansubmit) {
            document.getElementById('reservation-button').disabled = false;
        }
    }
    return (
        <form id="reservation-form" onSubmit={handleSubmit} className='subtext'>
            <ul className='vert-list'>
                <li className='subheader'>Book Now</li>
                <li>
                    <label htmlFor="res-date" >Choose date: </label>
                    <input
                        type="date"
                        id="res-date"
                        data-testid="res-date"
                        aria-label='reservation date'
                        required
                        onKeyUp={checkform()}
                        onChange={e => dispatch({ type: 'get-times', date: e.target.value })}
                    />
                </li>
                <li>
                    <label htmlFor="res-time">Choose time: </label>
                    <select
                        id="res-time"
                        value={resTime}
                        aria-label='reservation time'
                        required
                        onKeyUp={checkform}
                        onChange={e => setResTime(e.target.value)}>
                        <option></option>
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
                        aria-label='number of guests'
                        required
                        onKeyUp={checkform}
                        onChange={e => setGuests(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="occasion">Occasion: </label>
                    <select
                        id="occasion"
                        value={occasion}
                        required
                        onKeyUp={checkform}
                        onChange={e => setOccasion(e.target.value)}>
                        <option></option>
                        <option value="Dinner">Just Dinner</option>
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                    </select>
                </li>
                <li>
                    <button id="reservation-button" className='primary-button' type="submit" disabled="disabled" aria-label="make reservation" >Make Reservation</button>
                </li>
            </ul>
        </form>
    )
}

export default BookingForm;