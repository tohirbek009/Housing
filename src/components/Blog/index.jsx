import React, { Component } from 'react'
import {Blog, BlogText, BlogTitle, MainBody, BlogCard, User,ReadBtn,
    CardImage, CardInfo, AboutHouse, Description, IndicatorBtn} from './style'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import blog4 from '../images/blog4.jpg'
import 'remixicon/fonts/remixicon.css'

export default class index extends Component {
    render() {

        let blogInfo = [
            {user:"Robert Fox", date:"06 April, 2021",typeHouse:"familiy house", image:blog1,
            aboutHouse: "Redfin Ranks the Most Competitive Neighborhoods of 2020",
            description:"Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. "},
            {user:"Robert Fox", date:"06 April, 2021",typeHouse:"Apartment",
            aboutHouse: "Housing Markets That Changed the  Most This Decade",image:blog2,
            description:"Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. "},
            {user:"Robert Fox", date:"06 April, 2021",typeHouse:"Apartment",
            aboutHouse: "You Can Buy The Piano Teacher’s Home from Groundhog Day",image:blog3,
            description:"Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. "},
            {user:"Robert Fox", date:"06 April, 2021",typeHouse:"rENTAL",
            aboutHouse: "Redfin Ranks the Most Competitive Neighborhoods of 2020",image:blog4,
            description:"Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. "}
        ]

        return (
            <Blog>
                <BlogTitle>From Our Blog</BlogTitle>
                <BlogText>Lorem ipsum dolor sit amet consectetur adipisicing.</BlogText>

                <MainBody>
                    {
                        blogInfo.map(({user, date, typeHouse, aboutHouse, description, image}) =>
                        <BlogCard>
                            <IndicatorBtn>{typeHouse}</IndicatorBtn>
                            <CardImage>
                                <img src={image} style={{width:"100%", height:"220px"}} alt="" />
                            </CardImage>
                            <CardInfo>
                                <div style={{display:"flex"}}>
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <i class="ri-user-line"></i>
                                        <User>{user}</User>
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-between", marginLeft:"30px"}}>
                                        <i class="ri-calendar-line"></i>
                                        <User>{date}</User>
                                    </div>
                                </div>
                                <AboutHouse>
                                    Redfin Ranks the Most Competitive Neighborhoods of 2020
                                </AboutHouse>
                                <Description>
                                    Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. 
                                </Description>

                                <ReadBtn href="#">READ MORE</ReadBtn>

                            </CardInfo>
                        </BlogCard>
                        )
                    }
                </MainBody>
            </Blog>
        )
    }
}
