import React, { Component } from 'react'
import Profile from '../assets/profile.png'

export default class Testimonial extends Component {
    render() {


        let testimonialsInfo = [
            {
                image: Profile, 
                name:"Marvin McKinney", 
                job:"designer",
                opinion: "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
            },
            {
                image: Profile, 
                name:"Theresa Webb", 
                job:"host",
                opinion: "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
            },
            {
                image: Profile, 
                name:"Robert Fox", 
                job:"reporter",
                opinion: "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
            },
            {
                image: Profile, 
                name:"Guy Hawkins", 
                job:"developer",
                opinion: "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
            }
        ]

        return (
            <section className="testimonial">
                <div className="testimonial-text">
                    <p style={{margin:"0", padding: "0"}}>Our Testimonial</p>
                    <p style={{marginTop:"15px", marginBottom:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="items">
                    {
                        testimonialsInfo.map(({image, name, job, opinion}) => {
                            return(
                                <div className="te-box">
                                    <div className="opinion">
                                        <p>{opinion}</p>
                                        <img src={image} alt="" />
                                    </div>
                                    
                                    
                                    <p className="name">{name}</p>
                                    <p className="job">{job}</p>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
