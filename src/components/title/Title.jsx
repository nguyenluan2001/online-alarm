import React from 'react'
import {TitleContainer} from "./TitleStyle"
function Title({children,theme}) {
    return (
        <TitleContainer theme={theme}>
            {children}
        </TitleContainer>
    )
}

export default Title
