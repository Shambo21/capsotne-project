import { getDaysInMonth } from "./formatDates";

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}
const defaultTimes = [
    { key: "1", value: "17:00" },
    { key: "2", value: "18:00" },
    { key: "3", value: "19:00" },
    { key: "4", value: "20:00" },
    { key: "5", value: "21:00" },
    { key: "6", value: "22:00" },
]

//make dates table since api isn't working
const d = new Date();
const days = getDaysInMonth(d.getMonth(),d.getFullYear())
let tableMap = days.reduce((ac, a) => ({...ac, [a]:defaultTimes}), {})

export const fetchAPI =  (date) => {


    if (!date) {
        return ({
            items: defaultTimes,
            date: date
        })
    }
    return({
        items: tableMap[date],
        date:date
    })
}

export const submitAPI = async (data) => {

    //await timeout(2000)
    const timeAvailable = tableMap[data.resDate].some(item => item.value === data.resTime)
    if (timeAvailable){
        tableMap[data.resDate] = tableMap[data.resDate].filter(obj => {return obj.value !==data.resTime})
        return true;
    }
    return false;

}