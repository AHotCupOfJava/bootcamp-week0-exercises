import styled from 'styled-components'

export const Page = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.dark};
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 10px;
    background: radial-gradient(circle, rgba(179,96,189,1) 32%, rgba(255,145,246,1) 100%);
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.lighter};
`

export const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fonts.larger};
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: ${({ theme }) => theme.fonts.size};
    color: ${({ theme }) => theme.colors.plainDark};
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    background: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.plain};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.225s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.darkblue};
        color: white;
        width: 120px;
    }
`
