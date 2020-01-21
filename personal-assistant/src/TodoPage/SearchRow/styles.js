import styled from 'styled-components'

export const Input = styled.input`
    width: 350px;
    height: 30px;
    font-size: ${({ theme }) => theme.fonts.size};
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.plain};
    margin-right: 10px 2px;
    border-radius: 3px;
`