import { useLocation } from 'react-router-dom'
export const ConfirmedBooking = () => {
    const { state } = useLocation()
    return (
        <div className="hero">
            <div className="container">
                <div className='centered-item subtext' >
                    <ul className='vert-list'>
                    <li className='subheader'>Booking Confirmed!</li>
                        <li>
                            Date: {state.resDate}
                        </li>
                        <li>
                            Time: {state.resTime}
                        </li>
                        <li>
                            Guests: {state.guests}
                        </li>
                        <li>
                            Occasion: {state.occasion}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


