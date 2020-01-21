import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.home};
    height: 100%;
`

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 30px;
    width: 70%;
    height: auto;
`