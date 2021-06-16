import React, { Component } from 'react'
import 
    {ExploreCity, ExploreCityText,
    ExploreCityTitle, MainBody,Card, 
    Img, CardTitle, CardText, WrapCard1,
    LargeCard, WrapCard2} 
from './style'
import losAngles from "../images/Losangles.jpg"
import newYork from "../images/NewYork.jpg"
import london from "../images/Londom.jpg"
import paris from "../images/paris.jpg"
import florida from "../images/Florida.jpg"
import miami from "../images/Miami.jpg"


export default class index extends Component {
    render() {
        return (
            <ExploreCity>
                <ExploreCityTitle>
                    Explore Cities
                </ExploreCityTitle>
                <ExploreCityText>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                </ExploreCityText>
                <MainBody>
                    <WrapCard1>
                        <Card>
                            <Img src={losAngles}/>
                            <CardTitle>Los Angeles</CardTitle>
                            <CardText href="#">15 Properties</CardText>
                        </Card>
                        <Card>
                            <Img src={newYork}/>
                            <CardTitle>New York</CardTitle>
                            <CardText href="#">15 Properties</CardText>
                        </Card>
                        <Card style={{marginTop:"30px"}}>
                            <Img src={london}/>
                            <CardTitle>London</CardTitle>
                            <CardText href="#">15 Properties</CardText>
                        </Card>
                        <Card style={{marginTop:"30px"}}>
                            <Img src={paris}/>
                            <CardTitle>Paris</CardTitle>
                            <CardText href="#">15 Properties</CardText>
                        </Card>
                    </WrapCard1>
                    <LargeCard>
                        <Img src={florida}/>
                        <CardTitle>PFlorida</CardTitle>
                        <CardText href="#">15 Properties</CardText>
                    </LargeCard>
                    <WrapCard2>
                        <Card>
                            <Img src={miami}/>
                            <CardTitle>Miami</CardTitle>
                            <CardText href="#">15 Properties</CardText>
                        </Card>
                        <Card style={{marginTop:"30px"}}>
                            <Img src={paris}/>
                            <CardTitle>Paris</CardTitle>
                            <CardText href="#">15 Properties</CardText>
                        </Card>
                    </WrapCard2>
                </MainBody>
            </ExploreCity>
        )
    }
}
