import React from 'react'
import {ShowTimeContainer} from "./ShowTimeStyle"
function ShowTime({children,theme}) {
    return (
        <ShowTimeContainer theme={theme}>
            {children}
        </ShowTimeContainer>
    )
}

export default ShowTime
