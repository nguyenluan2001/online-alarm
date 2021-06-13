import React, { useState, useEffect } from 'react'
import axios from "axios"
import moment from 'moment'
import Title from "../components/title/Title"
const timeZoneList = [
    {
        name: "New York",
        api: "http://worldtimeapi.org/api/timezone/America/New_York"
    }, {
        name: "Mexico",
        api: "http://worldtimeapi.org/api/timezone/America/Mexico_City"
    },
    {
        name: "Vancouver",
        api: "http://worldtimeapi.org/api/timezone/America/Vancouver"
    },
    {
        name: "Bangkok",
        api: "http://worldtimeapi.org/api/timezone/Asia/Bangkok"
    },
    {
        name: "Ho Chi Minh",
        api: "http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh"
    },
    {
        name: "Hong Kong",
        api: "http://worldtimeapi.org/api/timezone/Asia/Hong_Kong"
    }

]
function Time({theme}) {
    const [timeZones, setTimeZones] = useState([])
    useEffect(() => {
        timeZoneList.forEach(item => {
            axios.get(item.api)
                .then(resp => {
                    let isoDate = "2013-03-10T02:00:00Z";
                    var d =new Date(resp.data.datetime)
                    // let timeZone={
                    //     name:item.name,
                    //     time:`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
                    // }
                    // setTimeZones(pre=>[...pre,timeZone])
                    console.log(resp.data.datetime)
                })
        })

    }, [])
    // var date = new Date(Date.UTC(2021,6,12, 3, 0, 0));

    // console.log(date.toLocaleTimeString('en-US', { hour12: false }))
    console.log(timeZones)

    return (
        <div>
            <Title theme={theme}>Đang cập nhật tính năng mới</Title>
        </div>
    )
}

export default Time
