import React, { Component } from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/inner-logo.png'
import add_btn from '../assets/add_btn.png'
import add_btn2 from '../assets/add_btn_phone.png'
import 'remixicon/fonts/remixicon.css'
import '../css/main.css'
import $ from 'jquery'
$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY >= 40){
            $("#header").addClass("change-back")
        }
        else if(this.scrollY < 40){
            $("#header").removeClass("change-back")
        }
    })

    $('.menu-btn').click(function(){
        console.log("ishlad");
        $('.header .bar').toggleClass("active")
        $('.header .menu-btn').toggleClass("change-color")
        $('.header .menu-btn i').toggleClass("active")
    });
    // slide-up script
    $('.scroll-up-btn').click(function (){
        $('html').animate({scrollTop:0});
     });
 
});

export default class Header extends Component {
    render() {
        return (
           <header className="header" id='header'>
               <a href="#" className="user" id="user"><i class="ri-user-3-line"></i></a>
               <div className="icon">
                   <img src={logo} alt="" style={{border:"1px"}}/>
                   <p>Houzing</p>
                    
               </div>
               <div className="bar">
                    <div className="icon">
                        <img src={logo2} alt="" style={{border:"1px"}}/>
                        <p>Houzing</p>
                    </div>
                    <a href="#">HOME</a>
                    <a href="#">LISTING</a>
                    <a href="#">PROPERTY</a>
                    <a href="#">PAGES</a>
                    <a href="#">CONTACT</a>
                   <a href="#" className="phone"><i class="ri-phone-line"></i><p> +(90)150-49-78</p></a>
                   <a href="#" className="user"><i class="ri-user-3-line"></i></a>
                   <a href="#" className="add-list">
                       <img src={add_btn} alt="" />
                       <img src={add_btn2} className="inner-btn" style={{display:"none"}} alt="" />
                       <p>CREAT LISTING</p>
                   </a>
               </div>
                <div className="menu-btn">
                    <i class="ri-menu-line"></i>
               </div>
           </header>
        )
    }
}

