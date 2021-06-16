import styled from 'styled-components'

export const Agents = styled.section`
padding: 100px;
border-top: 1.5px solid #E6E9EC;
@media (max-width:475px){
    display: none;
}
`

export const AgentTitle = styled.div`
width: 100%;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
`

export const AgentText = styled.div`
width: 100%;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-bottom: 75px;
`

export const MainBody = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Img = styled.img`
width: 100%;
height: 100%;
`

export const AgentsCard = styled.div`
width: 269px;
height: 360px;
position: relative;
`
export const SocialMedia = styled.div`
width: 68%;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
left: 50%;
transform: translateX(-50%);
bottom: 140px;
z-index: 1000;
display: none;
transition: all 0.5s ease;
`

export const CardBody = styled.div`
width: 100%;
height: 320px;
position: relative;
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #646464a6;
    opacity: 0;
    transition: all 0.3s ease;
   }
&:hover{
    ::before{
        opacity: 1;
    }
}
:hover{
    ${SocialMedia}{
        display: flex;
    }
}

`


export const CardFooter = styled.div`
background-color: #ffffff;
width: 229px;
padding: 18px 0;
box-shadow: 0 10px 50px rgba(13, 38, 59, 0.1);
position: absolute;
left: 20px;
bottom: 0;
`

export const AgentName = styled.div`
width: 100%;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #0D263B;

`
export const AgentJob = styled.div`
width: 100%;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: center;
color: #696969;
margin-top: 6px;
`