import React from 'react'
import { Container, StyledLink } from './styles'

const NavBar = () => (
  <Container>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/todos">Todo List</StyledLink>
  </Container>
)

export default NavBar
