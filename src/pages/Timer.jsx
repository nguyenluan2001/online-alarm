import React, { useState, useEffect, useRef, useReducer } from 'react'
import Countdown from "react-countdown"
import Title from '../components/title/Title'
import { Dropdown, Form, Button, ProgressBar } from "react-bootstrap"
import { SetUpTime, ShowTime, SoundControl } from "./styles/TimerStyle"
import SubTitle from '../components/subTitle/SubTitle'
import sound from "../assets/sounds/mixkit-forest-rain-loop-1225.mp3"
import LoadingProgress from 'react-js-loading-progress-bar';

const reducer = (state, action) => {
    switch (action.type) {
        case "set-hours":
            return { ...state, hours: action.payload };
        case "set-minutes":
            return { ...state, minutes: action.payload };
        case "set-seconds":
            return { ...state, seconds: action.payload };
        default:
            return state;
    }
}
function Timer({theme}) {
    let hours = []
    let minutes = []
    let seconds = []
    const sounds = [
        {
            id: 1,
            name: "Tiếng Mưa",
            audio: "../assets/sounds/mixkit-forest-rain-loop-1225.mp3"
        },
        {
            id: 2,
            name: "Tiếng Báo Thức",
            audio: "../assets/sounds/mixkit-morning-clock-alarm-1003.mp3"
        },
        {
            id: 3,
            name: "Tiếng Gà Gáy",
            audio: "../assets/sounds/mixkit-rooster-crowing-in-the-morning-2462.mp3"
        },
        {
            id: 4,
            name: "Tiếng Chuông Điện Thoại",
            audio: "../assets/sounds/mixkit-waiting-ringtone-1354.mp3"
        }
    ]
    const [choosedSound, setChoosedSound] = useState({
        id: 1,
        name: "Tiếng Mưa",
        audio: "../assets/sounds/mixkit-forest-rain-loop-1225.mp3"
    })
    const [toggleSound, setToggleSound] = useState(false)
    const [time, dispatch] = useReducer(reducer, {
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [convertTime, setConvertTime] = useState(5000)
    const btnControlClockRef = useRef()
    const btnStartClockRef = useRef()
    const audioRef = useRef()
    const clockRef = useRef();
    const audio = new Audio(sound)
    const handleStart = () => {
        if (btnStartClockRef.current.dataset.status == "start") {
            clockRef.current.start()
            btnStartClockRef.current.innerText = "Dừng đếm ngược"
            btnStartClockRef.current.className = ""
            btnStartClockRef.current.className = "btn btn-danger"
            btnStartClockRef.current.setAttribute('data-status', "stop")
        }
        else {
            clockRef.current.stop()
            btnStartClockRef.current.innerText = "Bắt đầu đếm ngược"
            btnStartClockRef.current.className = ""
            btnStartClockRef.current.className = "btn btn-primary"
            btnStartClockRef.current.setAttribute('data-status', "start")

        }
    };
    const handlePause = () => {

        if (btnControlClockRef.current.dataset.status == 'pause') {
            clockRef.current.pause()
            btnControlClockRef.current.innerText = "Tiếp tục"
            btnControlClockRef.current.className = ""
            btnControlClockRef.current.className = "btn btn-success ml-3"
            btnControlClockRef.current.setAttribute('data-status', "continue")
        }
        else {
            clockRef.current.start()
            btnControlClockRef.current.innerText = "Tạm dừng"
            btnControlClockRef.current.className = ""
            btnControlClockRef.current.className = "btn btn-info ml-3"
            btnControlClockRef.current.setAttribute('data-status', "pause")
        }

    };
    useEffect(() => {
        setConvertTime(0)
        let tempTime = time.hours * 3600 * 1000 + time.minutes * 60 * 1000 + time.seconds * 1000
        setConvertTime(tempTime)

    }, [time])
    for (let i = 0; i < 24; i++) {
        hours.push(<option value={i}>{i} Giờ</option>)
    }
    for (let i = 0; i < 60; i++) {
        minutes.push(<option value={i}>{i} Phút</option>)
    }
    for (let i = 0; i < 60; i++) {
        seconds.push(<option value={i}>{i} Giây</option>)
    }
    function chooseSound(e) {
        let sound = sounds.find(item => item.id == e.target.value).audio
        audioRef.current.src = sound
        audio.play()
    }
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed && btnStartClockRef.current.dataset.status == "stop") {
            // Render a completed state
            audio.play()
            return <ShowTime theme={theme}>{`00`}:{`00`}:{`00`}</ShowTime>;
        } else {
            // Render a countdown
            
            audio.pause()
            return <ShowTime theme={theme}>{hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}</ShowTime>;
        }
    };
    return (
        <div>
            <Title theme={theme} >Đồng hồ đếm ngược </Title>
            <SubTitle theme={theme}>Đặt hẹn giờ</SubTitle>
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
                <Form.Control as="select" className="w-100" onChange={(e) => dispatch({ type: 'set-seconds', payload: e.target.value })}>

                    {
                        seconds.map(item => {
                            return item
                        })
                    }
                </Form.Control>
            </SetUpTime>

            <SubTitle theme={theme}>Âm thanh nào sẽ được bật khi đếm ngược kết thúc</SubTitle>
            <Form.Control as="select" className="w-25 mx-auto" onChange={(e) => chooseSound(e)}>
                {
                    sounds.map(item => {
                        return <option value={item.id}>{item.name}</option>
                    })
                }
            </Form.Control>
            <SoundControl>
                <i className="far fa-play-circle" onClick={() => setToggleSound(true)}></i>
                <i className="far fa-pause-circle" onClick={() => setToggleSound(false)}></i>

            </SoundControl>
            <Countdown
                date={Date.now() + parseInt(convertTime)}
                renderer={renderer}
                autoStart={false}
                ref={clockRef}
            >
                {
                    // audio.play()
                }
            </Countdown>
            <div className="clock-control text-center">
                <Button onClick={() => handleStart()} ref={btnStartClockRef} data-status="start">Bắt đầu đếm ngược</Button>
                <Button onClick={() => handlePause()} className="btn-info ml-3" ref={btnControlClockRef} data-status="pause">Tạm dừng</Button>
            </div>



        </div>
    )
}

export default Timer
