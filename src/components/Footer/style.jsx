import styled from 'styled-components'

export const Footer = styled.section`
background: #0D263B;
`

export const FooterTop = styled.div`
width: 100%;
padding: 100px 120px;
display: flex;
justify-content: space-between;
border-bottom: 1.5px solid rgba(255, 255, 255, 0.15);
flex-wrap: wrap;

@media (max-width: 475px){
    padding-left: 25px;
    padding-right: 10px;
    padding-top: 0;
}
`


export const Box = styled.div`
@media (max-width: 475px){
    width: 100%;
    margin-top: 50px;
}
`

export const TitleBox = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
margin-bottom: 23px;
`

export const Word = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 40px;
color: #FFFFFF;
position: relative;
::after{
    content: "";
    height: 2px;
    width: 45%;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: #ffffff;
    opacity: 0;
    transition: all 0.3s ease;
}
:hover{
        cursor: pointer;
    ::after{
        opacity: 1;
    }
}
@media (max-width:475px){
    margin-left: 2px !important;
}
`

export const InputGroup = styled.div`
display: flex;
justify-content: space-between;
width: 469px;
padding: 5px;
background-color: #ffffff;
margin-top: 20px;
@media (max-width:475px){
    width: 100%;
    font-weight: 400;
}
`

export const Input = styled.input`
outline: none;
border: none;
`

export const Img = styled.div`
padding: 14px;
background-color: #0061DF;
`


export const FooterBottom = styled.div`
width: 100%;
padding: 30px 120px;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:475px){
    display: none;
    flex-direction: row-reverse;
}
`

export const FooterBottom2 = styled.div`
width: 100%;
padding: 30px 120px;
display: flex;
justify-content: space-between;
align-items: center;
display: none;
@media (max-width:475px){
    display: block;
    padding: 30px;
}
`

export const CopyRight = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
@media (max-width:475px){
    display: flex;
    justify-content: center;
}
`

export const Logo = styled.div`
@media (max-width:475px){
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
`

export const RightWords = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:475px){
    width: 100%;
    margin-bottom: 15px;
}
`