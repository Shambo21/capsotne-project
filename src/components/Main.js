import React, { useState, useReducer, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Reservations from './BookingPage'
import Hero from './Hero'
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
}
    ;


const Main = () => {

    return (
        <MainProvider>
            <Routes>
                <Route path='/' element={<Hero />}></Route>
                <Route path='/reservations' element={<Reservations />}></Route>
            </Routes>
        </MainProvider>
    )
}

export default Main;
