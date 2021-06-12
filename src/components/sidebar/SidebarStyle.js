import styled from "styled-components"
import {Link} from "react-router-dom"
export const SidebarContainer=styled.div`
background:#3d3c3c;
width:8vw;
height:100vh;
position:fixed;
display:flex;
flex-direction:column;
padding-top:1%;
`
export const TimeType=styled(Link)`
padding:20% 0%;
text-decoration:none;
i,span{
    color:white;
    display:block;
    text-align:center;
    font-size:1rem;

}
&:hover{
    background:#525050;
}
`