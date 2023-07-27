function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}


export const fetchAPI =  (date) => {


    if (!date) {
        return ({
            items: [
                { key: "1", value: "17:00" },
                { key: "2", value: "18:00" },
                { key: "3", value: "19:00" },
                { key: "4", value: "20:00" },
                { key: "5", value: "21:00" },
                { key: "6", value: "22:00" },
            ],
            date: date
        })
    }
    const d = new Date(date);
    //await timeout(1000)
    if (d >= new Date()) {
        return ({
            items: [
                { key: "1", value: "16:00" },
                { key: "2", value: "17:00" },
                { key: "3", value: "19:00" },
                { key: "4", value: "20:00" },
                { key: "5", value: "21:00" },
                { key: "6", value: "23:00" },
            ],
            date: date
        })

    }
    else {
        return ({
            items: [
                { key: "1", value: "15:00" },
                { key: "2", value: "16:00" },
                { key: "3", value: "17:00" },
                { key: "4", value: "18:00" },
            ],
            date: date
        })
    }
}

export const submitAPI = async (data) => {

    await timeout(2000)
    if (data) return true;

    return false;

}