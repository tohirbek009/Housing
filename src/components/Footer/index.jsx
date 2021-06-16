import React, { Component } from 'react'
import {Box, Footer, FooterTop, TitleBox, Word, Logo,
    InputGroup, Input, Img, FooterBottom, FooterBottom2, CopyRight, RightWords} from './style'
import phone from '../images/phone.svg'
import email from '../images/email.svg'
import location from '../images/pin.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.png'
import linkidin from '../images/linkidin.png'
import telegramInput from '../images/telegramInput.svg'
import logo from '../images/logo.svg'
import 'remixicon/fonts/remixicon.css'


export default class index extends Component {
    render() {
        return (
            <Footer>
                <FooterTop>
                        <Box>
                            <TitleBox>Contact Us</TitleBox>
                            <div style={{display:"flex"}}>
                                <img src={location} alt="" />
                                <Word style={{marginLeft:"20px", width:"250px", lineHeight:"22px"}}>
                                    329 Queensberry Street, North
                                    Melbourne VIC 3051, Australia.
                                </Word>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <img src={phone} alt="" />
                                <Word style={{marginLeft:"20px"}}>
                                    +998(90)150-49-78
                                </Word>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <img src={email} alt="" />
                                <Word style={{marginLeft:"20px"}}>
                                    odilovtohirbek009@gmail.com
                                </Word>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"159px"}}>
                                <a href="#">
                                    <img src={facebook} alt="" />
                                </a>
                                <a href="#">
                                    <img src={twitter} alt="" />
                                </a>
                                <a href="#">
                                    <img src={instagram} alt="" />
                                </a>
                                <a href="#">
                                    <img src={linkidin} alt="" />
                                </a>
                            </div>
                        </Box>
                        <Box>
                            <TitleBox>Discover</TitleBox>
                            <Word>Chicago</Word>
                            <Word>Los Angles</Word>
                            <Word>Miami</Word>
                            <Word>New York</Word>
                        </Box>  
                        <Box>
                            <TitleBox>List by Category</TitleBox>
                            <Word>Apartment</Word>
                            <Word>Condos</Word>
                            <Word>Houses</Word>
                            <Word>Offices</Word>
                            <Word>Retail</Word>   
                            <Word>Villas</Word>      
                        </Box>
                        <Box>
                            <TitleBox>Quick Links</TitleBox>
                            <Word>About Us</Word>
                            <Word>Terms&Conditions</Word>
                            <Word>User's Guide</Word>
                            <Word>Support Center</Word>
                            <Word>Press Info</Word>
                            <Word>Contact Us</Word> 
                        </Box>
                        <Box>
                            <TitleBox>Subscribe</TitleBox>
                            <Word>We don’t send spam so don’t worry.</Word>
                            <InputGroup>
                                <Input type="text" placeholder="Enter your email"/>
                                <Img>
                                    <img src={telegramInput} alt="" />
                                </Img>
                            </InputGroup>
                        </Box>
                </FooterTop>
                <FooterBottom>
                    <CopyRight>
                        Copyright <i class="ri-copyright-line"></i> 2021 CreativeLayers. All Right Reserved.
                    </CopyRight>
                    <Logo><img src={logo} alt="" /></Logo>
                    <RightWords>
                        <Word style={{marginLeft:"16px"}}>Home</Word>
                        <Word style={{marginLeft:"16px"}}>Site Map</Word>
                        <Word style={{marginLeft:"16px"}}>Privacy police</Word>
                        <Word style={{marginLeft:"16px"}}>Cookie Policy</Word>
                    </RightWords>
                </FooterBottom>
                <FooterBottom2>
                    <Logo><img src={logo} alt="" /></Logo>
                    <RightWords>
                        <Word style={{marginLeft:"16px"}}>Home</Word>
                        <Word style={{marginLeft:"16px"}}>Site Map</Word>
                        <Word style={{marginLeft:"16px"}}>Privacy police</Word>
                        <Word style={{marginLeft:"16px"}}>Cookie Policy</Word>
                    </RightWords>
                    <CopyRight>
                        Copyright <i class="ri-copyright-line"></i> 2021 CreativeLayers. All Right Reserved.
                    </CopyRight>
                </FooterBottom2>
            </Footer>
        )
    }
}
