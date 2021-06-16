import styled from 'styled-components'



export const ExploreCity = styled.section`
width: 100%;
padding: 100px;
@media (max-width:475px){
    padding: 20px;
}
`
export const ExploreCityTitle = styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
margin-bottom: 10px;
@media (max-width:475px){
    font-size: 22px;
}
`

export const ExploreCityText = styled.p`
font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-bottom: 50px;
@media (max-width:475px){
    font-size: 14px;
    margin-bottom: 30px;
}
`

export const MainBody = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
export let CardTitle = styled.p`
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
display: block;
margin-bottom: 10px;
transition:  all 0.3s ease;
`
export let CardText = styled.a`
text-decoration: none;
position: absolute;
bottom: 16px;
left: 50%;
transform: translateX(-50%);
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
display: block;
&:hover {
    text-decoration: underline;
    color: whitesmoke;
    cursor: pointer;
}
`
export const Img = styled.img`
width: 100%;
height: 100%;
`

export const Card = styled.div`
width: 269px;
height: 250px;
@media (max-width: 475px){
    width: 48%;
    height: 170px;
    margin-top: 20px !important;
}
position: relative;
overflow: hidden;
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 269px;
    background-color: #757575b3;
    opacity: 1;
    transition: all 0.3s ease;
}

:hover{
    ::before{
        opacity: 1;
        bottom: 0;
    }
}
`



export const WrapCard1 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
width: 568px;
`

export const LargeCard = styled.div`
width: 568px;
height: 530px;
position: relative;
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 568px;
    background-color: #757575b3;
    opacity: 1;
    transition: all 0.3s ease;
}

:hover{
    ::before{
        opacity: 1;
        bottom: 0;
    }
}
@media (max-width:475px){
    width: 100%;
    height: 370px;
    margin-top: 20px;
}

`
export const WrapCard2 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
width: 270px;
@media (max-width: 475px){
    width: 100%;
}
`