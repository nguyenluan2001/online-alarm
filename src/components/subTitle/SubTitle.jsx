import React from 'react'
import {SubTitleContainer} from "./SubTitleStyle"
function SubTitle({children,theme}) {
    return (
        <SubTitleContainer theme={theme}>
            {children}
        </SubTitleContainer>
    )
}

export default SubTitle
