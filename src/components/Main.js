import React, {useReducer} from 'react'
import {Routes, Route} from 'react-router-dom'
import Reservations from './BookingPage'
import Hero from './Hero'

const reducer = (state,action)=>{

    return state;
}

const Main =() => {

    const times =  [
        {key:"1", value:"17:00"},
        {key:"2", value:"18:00"},
        {key:"3", value:"19:00"},
        {key:"4", value:"20:00"},
        {key:"5", value:"21:00"},
        {key:"6", value:"22:00"},
    ];
    const updateTimes =() =>{
        const times = []
        return times;
    }
    const initializeTimes = () => {
        return times
    }
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <Routes>
          <Route path='/' element={ <Hero />}></Route>
          <Route path='/reservations' element={<Reservations state={state} setTimes={dispatch}/>}></Route>
        </Routes>
    )
}

export default Main;