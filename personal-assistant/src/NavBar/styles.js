import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100vw;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.light};
    display: flex;
    justify-content: center;
`

export const StyledLink = styled(Link)`
    font-family: sans-serif;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.dark};
    text-align: center;
    padding: 15px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.225s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.link};
    }

`