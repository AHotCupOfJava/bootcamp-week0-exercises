import styled from 'styled-components'

export const Button = styled.button`
    width: 25px;
    height: 25px;
    font-size: ${({ theme }) => theme.fonts.size};
    text-align: center;
    background: ${({ theme }) => theme.colors.medium};
    border: 1px solid ${({ theme }) => theme.colors.plain};
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.225s ease;
    margin-right: 10px;

    &:hover {
        background: ${({ theme }) => theme.colors.dark};
        color: white;
    }

`
export const Container = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fonts.larger};
`

export const Dot = styled.span`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 10px;
`