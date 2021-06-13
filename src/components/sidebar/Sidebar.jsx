import React from 'react'
import { SidebarContainer, TimeType } from "./SidebarStyle"
function Sidebar({theme,setTheme,showSidebar}) {
    function toggleTheme()
    {
        if(theme=='darkTheme')
        {
            setTheme('lighTheme')
        }
        else
        {
            setTheme('darkTheme')
        }
    }
    return (
        <SidebarContainer showSidebar={showSidebar}>
            <TimeType to="alarm-clock">
                <i class="far fa-bell"></i>
                <span>Alarm Clock</span>
            </TimeType>
            <TimeType to="timer">
                <i class="fas fa-history"></i>
                <span>Timer</span>
            </TimeType>
            <TimeType to="stop-watch">
                <i class="fas fa-stopwatch"></i>
                <span>Stop watch</span>
            </TimeType>
            <TimeType to="time">
                <i class="far fa-clock"></i>
                <span>Time</span>
            </TimeType>
            <div class="custom-control custom-switch mx-auto">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={()=>toggleTheme()}/>
                <label class="custom-control-label" for="customSwitch1"></label>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar
