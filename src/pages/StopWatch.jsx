import React, { useState, useEffect } from 'react'
import Countdown from "react-countdown"
// import { ShowTime } from "./styles/StopwatchStyle"
import { Button } from "react-bootstrap"
import ShowTime from "../components/showTime/ShowTime"
let t = null

function StopWatch({ theme }) {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)
    const [rounds, setRounds] = useState([])
    const [start, setStart] = useState(false)
    const [isContinue,setIsContinue]=useState(false)
    useEffect(() => {
        if (isContinue) {
            t = setInterval(() => {
                setMilliseconds(pre => pre + 10)
            }, 10)

        }
        else {
            clearInterval(t)
        }
    }, [isContinue])
    useEffect(() => {
        if (milliseconds == 1000) {
            setSeconds(pre => pre + 1)
            setMilliseconds(0)
        }
        if (seconds == 60) {
            setMinutes(pre => pre + 1)
            setSeconds(0)
            setMilliseconds(0)

        }
        if (minutes == 60) {
            setHours(pre => pre + 1)
            setMinutes(0)
            setSeconds(0)
            setMilliseconds(0)

        }
    }, [milliseconds])
    function getRound() {
        let time = `${hours}:${minutes}:${seconds}.${milliseconds}`
        setRounds(pre => [...pre, time])

    }
    function resetTime()
    {
        clearInterval(t)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        setMilliseconds(0)
        setStart(pre=>!pre)
    }
    function runTime()
    {
        if(!start)
        {

            setStart(pre => !pre)
        }
        setIsContinue(pre=>!pre)
    }
    return (
        <div>
            <ShowTime theme={theme}>{hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}.{milliseconds}</ShowTime>
            <div className="control-btns text-center">
                <Button onClick={() => runTime()} >{!start?"B????t ??????u":isContinue?"Ta??m d????ng":"Ti????p tu??c"}</Button>
                {isContinue?<Button className="btn-success ml-3" onClick={() => getRound()}>T????ng vo??ng</Button>:<Button className="btn-success ml-3 " style={{cursor:'not-allowed'}} disabled>T????ng vo??ng</Button>}
                {isContinue?<Button className="btn-warning ml-3" onClick={()=>resetTime()}>??????t la??i</Button>:<Button className="btn-warning ml-3"  style={{cursor:'not-allowed'}} disabled>??????t la??i</Button>}
            </div>
            <div className="show-rounds">
                <table className={`${theme.background=="#fff"?'table-dark':'table-light'} table-striped mx-auto w-75 mt-3`}>
                    <thead>
                        <th>S???? vo??ng</th>
                        <th>Th????i gian vo??ng</th>
                        <th>T????ng th????i gian</th>
                    </thead>
                    <tbody>
                        {
                            rounds.map((item,index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item}</td>
                                        <td>{0}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default StopWatch
