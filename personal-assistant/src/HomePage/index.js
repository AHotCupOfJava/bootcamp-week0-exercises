import React from 'react'
import Greeting from './Greeting'
import NavBar from '../NavBar'
import { Container, Image } from './styles'
import boston from './boston.jpg'

const HomePage = () => (
    <Container>
        <NavBar/>
        <Greeting/>
        <Image src={boston}/>
    </Container>
)

export default HomePage