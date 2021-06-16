import React, { Component } from 'react'
import '../css/main.css'
import bed from '../assets/bed.png'
import bath from '../assets/bath.png'
import car from '../assets/car.png'
import ruler from '../assets/ruler.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import foto from '../assets/photo.png'
import video from '../assets/video.png'
import styled from 'styled-components'










export default class Card extends Component {
    render() {
        const 
            {
                pictureHouse, name, location, beds, baths, garage, area, lastPrice, 
                currentPrice,countPictures, countVideos
            } = this.props.value
        return (
            <div className="card">
                <button type="button" className="featured">FEATURED</button>
                <button type="button" className="for-sale">FOR SALE</button>
                <div className="foto-icon">
                    <img src={foto} alt="" />
                    <p>{countPictures}</p>
                </div>
                <div className="video-icon">
                    <img src={video} alt="" />
                    <p>{countVideos}</p>
                </div>
                <div className="card-header">
                    <img src={pictureHouse} alt="" />
                </div>
                <div className="body">
                    <div className="small-image">
                        <img src={pictureHouse} alt="" />
                    </div>
                    <div className="name-house">{name}</div>
                    <div className="location-house">{location}</div>
                    <div className="information">
                        <div className="box">
                            <img src={bed} alt="" />
                            <p>{beds} Beds</p>
                        </div>
                        <div className="box">
                            <img src={bath} alt="" />
                            <p>{baths} Baths</p>
                        </div>
                        <div className="box">
                            <img src={car} alt="" />
                            <p>{garage} Garage</p>
                        </div>
                        <div className="box">
                            <img src={ruler} alt="" />
                            <p>{area} Sq Ft</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="prices">
                        <strike>${lastPrice}/mo</strike>
                        <p>${currentPrice}/mo</p>
                    </div>
                    <div className="icons">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
