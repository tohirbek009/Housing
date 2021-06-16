import React, { Component } from 'react'
import agent1 from '../images/testimonials-1.jpg'
import agent2 from '../images/testimonials-2.jpg'
import agent3 from '../images/testimonials-3.jpg'
import agent4 from '../images/testimonials-4.jpg'
import agent5 from '../images/testimonials-5.jpg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.png'
import linkidin from '../images/linkidin.png'
import {Agents, AgentsCard, Img, CardFooter,CardBody, 
    AgentName, AgentJob, MainBody, AgentTitle, AgentText,
    SocialMedia} 
from "./style"

export default class index extends Component {
    render() {


        let agentsInfo = [
            {name:"Robert Fox", job:"Lead Designer", image:agent1},
            {name:"Floyd Miles", job:"CEO, Director", image:agent2},
            {name:"Albert Flores", job:"Marketer", image:agent3},
            {name:"Darleno Robertson", job:"Project Manager", image:agent4},
            {name:"Savannah Nguyen", job:"Lead Developer", image:agent5}
        ]

        return (
            <Agents>

                <AgentTitle>Meet Our Agents</AgentTitle>
                <AgentText>Lorem, ipsum dolor sit amet consectetur adipisicing.</AgentText>

                <MainBody>
                {
                    agentsInfo.map(({name, job, image}) => {
                        return(
                            <AgentsCard>
                                <CardBody>
                                    <Img src={image}/>
                                    <SocialMedia>
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
                                    </SocialMedia>
                                </CardBody>
                                <CardFooter>
                                    <AgentName>{name}</AgentName>
                                    <AgentJob>{job}</AgentJob>
                                </CardFooter>
                            </AgentsCard>
                        )
                    })
                }
                </MainBody>
            </Agents>
        )
    }
}
