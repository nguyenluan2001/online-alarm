import styled from "styled-components"
export const TitleContainer=styled.p`
font-size:2rem;
font-weight:bold;
color:${({theme})=>theme.textColor};
margin:0;
text-align:center;
@media screen and (max-width:1024px)
{
    font-size:1.5rem;
}
`