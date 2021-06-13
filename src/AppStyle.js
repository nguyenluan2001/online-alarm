import styled from "styled-components"
export const MainContent=styled.div`
padding-top:2%;
margin-left: 8vw;
background:${({theme})=>theme.background};
min-height:100vh;
@media screen and (max-width:1024px)
{
    margin-left:10vw;
}
`