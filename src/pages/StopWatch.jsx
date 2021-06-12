import React, { useState, useEffect } from 'react'
import Countdown from "react-countdown"
import { ShowTime } from "./styles/StopwatchStyle"
import { Button } from "react-bootstrap"
let t = null

function StopWatch({ theme }) {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)
    const [rounds, setRounds] = useState([])
    const [start, setStart] = useState(false)
    useEffect(() => {
        if (start) {
            t = setInterval(() => {
                setMilliseconds(pre => pre + 10)
            }, 10)

        }
        else {
            clearInterval(t)
        }
    }, [start])
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
    return (
        <div>
            <ShowTime theme={theme}>{hours > 9 ? hours : `0${hours}`}:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}.{milliseconds}</ShowTime>
            <div className="control-btns text-center">
                <Button onClick={() => setStart(pre => !pre)} >{!start?"Bắt đầu":"Tạm dừng"}</Button>
                {start?<Button className="btn-success ml-3" onClick={() => getRound()}>Từng vòng</Button>:<Button className="btn-success ml-3 disabled">Từng vòng</Button>}
            </div>
            <div className="show-rounds">
                <table className="table-dark table-striped mx-auto w-50 mt-3">
                    <thead>
                        <th>Số vòng</th>
                        <th>Thời gian vòng</th>
                        <th>Tổng thời gian</th>
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
