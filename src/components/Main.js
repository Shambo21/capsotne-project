import React, { useReducer, useEffect, createContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BookingPage from './BookingPage'
import Hero from './Hero'
import { ConfirmedBooking } from './ConfimedBooking'
import { fetchAPI, submitAPI } from './API'

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const fetchTimes = (date) => {
        return fetchAPI(date)
    };

    useEffect(() => {
        fetchTimes();
    }, []);

    const updateTimes = (state, action) => {
        if (action.type === 'get-times') {
            const x =  fetchTimes(action.date)
            return { ...x }
        }
        else
            return state;
    }
    const initializeTimes = () => {
        return (fetchTimes())
    };
    const times = initializeTimes()

    const [state, dispatch] = useReducer(updateTimes, times);

    return (
        <MainContext.Provider value={{ state, dispatch }}>
            {children}
        </MainContext.Provider>
    )
};




const Main = () => {

    const navigate = useNavigate();
    const submitForm = (data) =>{

        if(submitAPI(data) === true){
            console.log("Reservation has been made")
            navigate('/confirmation', {state:data})
        }
        else{
            console.log('Was not able to make reservation at this time')
        }

    }

    return (
        <MainProvider>
            <Routes>
                <Route path='/' element={<Hero />}></Route>
                <Route path='/reservations' element={<BookingPage submitForm={submitForm}/>}></Route>
                <Route path='/confirmation' element={<ConfirmedBooking />}></Route>
            </Routes>
        </MainProvider>
    )
}

export default Main;
