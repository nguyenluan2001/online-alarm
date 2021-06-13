import styled from "styled-components"
export const MainContent = styled.div`
padding-top:2%;
margin-left: 8vw;
background:${({ theme }) => theme.background};
min-height:100vh;
postition:relative;
@media screen and (max-width:860px)
{
    margin:0;
    transform:${({ showSidebar }) => showSidebar ? 'translateX(25vw)' : 'translateX(0px)'};
    transition:transform 0.5s ease-in-out;

}
.menu-icon{
    position:absolute;
    top:1vh;
    left:2vw;
    font-size:2rem;
    display:none;
    @media screen and (max-width:860px)
{
    display:block;
}
}
`