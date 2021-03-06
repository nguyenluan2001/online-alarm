import styled from "styled-components"
export const ShowTimeContainer = styled.p`
font-size:5rem;
font-weight:bold;
color:${({ theme }) => theme.textColor};
text-align:center;
@media screen and (max-width:1024px)
{
    font-size:4rem;
}

display:flex;
justify-content:center;
align-items:center;
&:fullscreen{
    font-size:8rem;
    color:${({ theme }) => theme.textColor};
    background:${({ theme }) => theme.background};

}
`