import React, { Component } from 'react'
import {Regitired, RegistiredTitle, RegistiredText, RegistiredBtn} from './style'


export default class index extends Component {
    render() {
        return (
            <Regitired>
                <RegistiredTitle>Become a Real Estate Agent</RegistiredTitle>
                <RegistiredText>Lorem, ipsum dolor sit amet consectetur adipisicing.</RegistiredText>
                <RegistiredBtn href="#">Register Now</RegistiredBtn>
            </Regitired>
        )
    }
}
