import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import office1 from '../assets/office.jpg'
import office2 from '../assets/office2.jpg'
import room1 from '../assets/room.jpg'
import room2 from '../assets/room2.jpg'
import apartment1 from '../assets/apartment.jpg'
import apartment2 from '../assets/apartment2.jpg'
import villa1 from '../assets/villa.jpg'
import villa2 from '../assets/wp3604632.jpg'

export default class Explore extends Component {
    render() {

        let images = [apartment1, room1, villa1, office2, office1, apartment2, villa2, room2, room1, apartment2];

        return (
            <section className="explore">   
                <div className="explore-text">
                    <p style={{marginBottom:"10px"}}>Explore Our Properties</p>
                    <p style={{marginBottom:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin</p>
                </div>
                <div className="explore-carousel">
                    <CarouselProvider
                        naturalSlideWidth={300}
                        naturalSlideHeight={1}
                        visibleSlides={6}
                        totalSlides={10}

                    >
                        <Slider>
                            {
                                images.map((img, index) => {
                                    return (
                                        <Slide index={index}>
                                <div className="box-img">
                                    <img src={img} alt="" />
                                </div>
                            </Slide>
                                    )
                                })
                            }
                        </Slider>
                        <ButtonBack>
                            <i class="ri-arrow-left-s-line"></i>
                        </ButtonBack>
                        <ButtonNext>
                            <i class="ri-arrow-right-s-line"></i>
                        </ButtonNext>
                    </CarouselProvider>
                </div>
            </section>
        )
    }
}   
