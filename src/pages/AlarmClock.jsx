import React, { useState, useEffect, useReducer } from 'react'
import Title from '../components/title/Title'
import Countdown from "react-countdown"
import moment from 'moment';
import { Form, Button } from "react-bootstrap"
import { SetUpTime, ShowTime } from "./styles/AlarmStyle"
import sound from "../assets/sounds/mixkit-forest-rain-loop-1225.mp3"
const reducer = (state, action) => {
    switch (action.type) {
        case 'set-hours':
            return { ...state, hours: action.payload }
        case 'set-minutes':
            return { ...state, minutes: action.payload }
        default:
            return state
    }
}
function AlarmClock({ theme }) {
    const [time, setTime] = useState("")
    const [alarmTime, dispatch] = useReducer(reducer, { hours: '00', minutes: '00' })
    const [restTime, setRestTime] = useState(-999)
    const [isAlarm, setIsAlarm] = useState(false)
    const audio = new Audio(sound)
    function msToTime(duration) {
        if (duration != -999) {
            let seconds = Math.floor((duration % 3600) % 60)
            let minutes = Math.floor((duration % 3600) / 60)
            let hours = Math.floor((duration / 3600))
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return hours + ":" + minutes + ":" + seconds;
        }
        else{
            return "00:00:00"
        }
        // var milliseconds = parseInt((duration % 1000) / 100),

    }
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString('vi', { hour12: false }))
        }, 1000)


        // console.log(timeToSecond)
        // if(restTime==0)
        // {
        //     audio.play()
        // }


    }, [])
    useEffect(() => {
        if (isAlarm) {
            if (restTime != 0) {
                let timeToArray = time.split(":");
                let timeToSecond = parseInt(timeToArray[0]) * 3600 + parseInt(timeToArray[1]) * 60 + parseInt(timeToArray[2])
                let alarmTimeToSecond = alarmTime.hours * 3600 + alarmTime.minutes * 60
                if (alarmTimeToSecond < timeToSecond) {
                    setRestTime(24 * 3600 - (timeToSecond - alarmTimeToSecond))
                }
                else {

                    setRestTime(alarmTimeToSecond - timeToSecond)
                }
            }
        }
        else {
            setRestTime(-999)
        }

    }, [time])
    useEffect(() => {
        if (restTime == 0 && isAlarm == true) {
            audio.play()
            console.log('running')
        }
        
    }, [restTime])
    useEffect(() => {
       if(!isAlarm)
       {
           audio.pause()
           console.log('stop')
       }
    }, [isAlarm])

    let hours = []
    let minutes = []
    for (let i = 0; i < 24; i++) {
        hours.push(<option value={i > 9 ? i : `0${i}`}>{i > 9 ? i : `0${i}`}</option>)
    }
    for (let i = 0; i < 60; i++) {
        minutes.push(<option value={i > 9 ? i : `0${i}`}>{i > 9 ? i : `0${i}`}</option>)
    }
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            // audio.play()
            return <ShowTime>{`00`}:{`00`}:{`00`}</ShowTime>;
        } else {
            // Render a countdown
            // console.log(audio)

            // audio.pause()
            return <ShowTime>{hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}</ShowTime>;
        }
    };
    return (
        <div>
            <Title theme={theme}>Đồng hồ Báo thức Trực tuyến</Title>
            <Title theme={theme}>{time}</Title>
            <SetUpTime>

                <Form.Control as="select" className="w-100" onChange={(e) => dispatch({ type: 'set-hours', payload: e.target.value })}>

                    {
                        hours.map(item => {
                            return item
                        })
                    }
                </Form.Control>
                <Form.Control as="select" className="w-100" onChange={(e) => dispatch({ type: 'set-minutes', payload: e.target.value })}>
                    {
                        minutes.map(item => {
                            return item
                        })
                    }
                </Form.Control>
            </SetUpTime>
            <ShowTime theme={theme}>{msToTime(restTime)}</ShowTime>
            <div className="control-btns text-center">
                <Button className={!isAlarm ? "btn-primary" : "btn-danger"} onClick={() => setIsAlarm(pre => !pre)} >{!isAlarm ? "Đặt báo thức" : "Dừng báo thức"}</Button>
            </div>
            {/* <Countdown
                date={Date.now() + restTime}
                // renderer={renderer}
            >
                {
                    // audio.play()
                }
            </Countdown> */}
        </div>
    )
}

export default AlarmClock
