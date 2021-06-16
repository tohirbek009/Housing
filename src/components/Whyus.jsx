import React, { Component } from 'react'
import property from '../assets/property.png'
import maps from '../assets/maps.png'
import phoen from '../assets/phone.png'

export default class Whyus extends Component {
    render() {

        let boxInfo = [
            {
                image: property, 
                bxTitle:"Trusted By Thousands", 
                bxText: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
            },
            {
                image: property, 
                bxTitle:"Trusted By Thousands", 
                bxText: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
            },
            {
                image: property, 
                bxTitle:"Trusted By Thousands", 
                bxText: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
            },
            {
                image: property, 
                bxTitle:"Trusted By Thousands", 
                bxText: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
            }
        ]

        return (
            <section className="why-us">
                <div className="why-us-text">
                    <p>Why Choose Us</p>
                    <p>We provide full service at every step</p>
                </div>
                <div className="boxes">
                    {
                        boxInfo.map(({image, bxTitle, bxText}) => {
                            return (
                                <div className="box">
                                    <div className="top-icon">
                                        <img src={image} alt="" style={{color:"white", background:"white"}} />
                                    </div>
                                    <p className="bx-title">{bxTitle}</p>
                                    <p className="bx-text">{bxText}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
