import styled from 'styled-components'

export const Blog = styled.section`
padding: 100px;
background-color: #F6F8F9;
@media (max-width: 475px){
    padding: 40px 20px 40px 20px;
}
`
export const BlogTitle = styled.div`
width: 100%;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0D263B;
@media (max-width: 475px){
    font-size: 22px;
}
`
export const BlogText = styled.div`
width: 100%;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #696969;
margin-top: 10px;
margin-bottom: 50px;
@media (max-width: 475px){
    font-size: 14px;
}
`

export const MainBody = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`   

export const BlogCard = styled.div`
width: 345px;
background-color: white;
position: relative;
@media (max-width: 475px){
    width: 100%;
    margin-top: 20px;
}
`

export const CardImage = styled.div`
width: 100%;
`

export const CardInfo = styled.div`
margin-top: 25px;
width: 100%;
padding-left: 20px;
padding-bottom: 30px;
background-color: white;
`

export const AboutHouse = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
color: #0D263B;
margin-top: 15px;
`

export const Description = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
margin-top: 10px;
`

export const IndicatorBtn = styled.div`
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #ffffff;
padding: 5px 12px;
background-color: #0061DF;
display: inline;
position: absolute;
top: 32px;
left: 30.5px;
text-transform: uppercase;
cursor: pointer;
`

export const User = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #696969;
margin-left: 11.5px;
`

export const ReadBtn = styled.a`
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0061DF;
margin-top: 20px;
margin-bottom: 30px;
`
