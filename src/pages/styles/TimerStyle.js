import styled from "styled-components"
export const SetUpTime=styled.div`
width:50%;
margin:0px auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-column-gap:3%;
`
export const SoundControl=styled.div`
text-align:center;
i{
    color:white;
    font-size:1rem;
    margin:0.8%;
    cursor:pointer;
}
`
export const ShowTime=styled.p`
font-size:5rem;
font-weight:bold;
color:${({theme})=>theme.textColor};
text-align:center;
`
export const CommonTime=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
padding:3% 20%;
margin:0px auto;
justify-content:center;
span{
    text-align:center;
    color:${({theme})=>theme.textColor};
    cursor:pointer;
    &:hover{
        color:blue;
    }
}
`