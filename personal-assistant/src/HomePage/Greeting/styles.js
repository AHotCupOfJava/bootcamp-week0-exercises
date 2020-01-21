import styled from 'styled-components'

export const Heading = styled.h1`
    font-size: ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    text-align: center;
    margin-top: 100px;
`