import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import Card from '../components/Card'
import '../css/main.css'

export default class Discover extends Component {
    render() {
        let housesData = [
            {
                pictureHouse: house1,
                name: 'New Apartment Nice Wiew', 
                location:'Quincy St, Brooklyn, NY, USA',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2800,
                currentPrice: 7500,
                countPictures: 22,
                countVideos: 4
            },
            {
                pictureHouse: house2,
                name: 'Skyper Pool Apartment', 
                location:'112 Glenwood Ave Hyde Park, Boston, MA',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2800,
                currentPrice: 5250,
                countPictures: 22,
                countVideos: 4
            },
            {
                pictureHouse: house3,
                name: 'New Caledonian Wharf', 
                location:'251 SW 6th Ln Florida City, FL',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2300,
                currentPrice: 7500,
                countPictures: 22,
                countVideos: 4
            },
            {
                pictureHouse: house4,
                name: 'Spacious Family Home', 
                location:'4 W 21st St Flatiron District, New York, NY',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2800,
                currentPrice: 1900,
                countPictures: 22,
                countVideos: 4
            },{
                pictureHouse: house1,
                name: 'New Apartment Nice Wiew', 
                location:'Quincy St, Brooklyn, NY, USA',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2800,
                currentPrice: 7500,
                countPictures: 22,
                countVideos: 4
            },
            {
                pictureHouse: house2,
                name: 'Skyper Pool Apartment', 
                location:'112 Glenwood Ave Hyde Park, Boston, MA',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2800,
                currentPrice: 5250,
                countPictures: 22,
                countVideos: 4
            },
            {
                pictureHouse: house3,
                name: 'New Caledonian Wharf', 
                location:'251 SW 6th Ln Florida City, FL',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2300,
                currentPrice: 7500,
                countPictures: 22,
                countVideos: 4
            },
            {
                pictureHouse: house4,
                name: 'Spacious Family Home', 
                location:'4 W 21st St Flatiron District, New York, NY',
                beds: 4,
                baths: 5,
                garage: 1,
                area: 1200,
                lastPrice: 2800,
                currentPrice: 1900,
                countPictures: 22,
                countVideos: 4
            },
        ]

        return (
            <section className="discover">
                <div className="discover-text">
                    <p>Discover Our Featured Listings</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="item">
                    <CarouselProvider
                        naturalSlideWidth={1}
                        naturalSlideHeight={1}
                        totalSlides={8}
                        visibleSlides = {4}
                        infinite = {true}
                    >
                        <Slider>
                            {
                                housesData.map((value, index) => {
                                    return (
                                        <Slide index = {index}><Card value = {value}/></Slide>
                                    )
                                })
                            }
                        </Slider>
                        <DotGroup 
                            showAsSelectedForCurrentSlideOnly={true}
                            className="dots"
                        ></DotGroup>
                    </CarouselProvider>
                </div>
            </section>
        )
    }
}
