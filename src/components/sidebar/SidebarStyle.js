import styled from "styled-components"
import {Link} from "react-router-dom"
export const SidebarContainer=styled.div`
background:#3d3c3c;
width:8%;
height:100vh;
position:fixed;
display:flex;
flex-direction:column;
padding-top:1%;
@media screen and (max-width:1024px)
{
    width:10%;
}
`
export const TimeType=styled(Link)`
padding:20% 10%;
text-decoration:none;
i,span{
    color:white;
    display:block;
    text-align:center;
    font-size:1rem;
    @media screen and (max-width:1024px)
    {
        font-size:0.8rem;
    }

}
&:hover{
    background:#525050;
}
`