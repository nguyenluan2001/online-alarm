import React from 'react'
import {ShowTimeContainer} from "./ShowTimeStyle"
function ShowTime({children,theme}) {
    return (
        <ShowTimeContainer theme={theme} id="showTime">
            {children}
        </ShowTimeContainer>
    )
}

export default ShowTime
