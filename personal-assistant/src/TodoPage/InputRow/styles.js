import styled from 'styled-components'
import Select from 'react-select'

export const Input = styled.input`
    width: 250px;
    height: 30px;
    font-size: ${({ theme }) => theme.fonts.size};
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.plain};
    margin-right: 10px;
    border-radius: 3px;
`

export const Container = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    width: 90px;
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
        width: 100px;
    }

`

export const StyledSelect = styled(Select)`
    width: 160px;
    margin-right: 10px;
    margin-bottom: 2px;
    border: 1px solid ${({ theme }) => theme.colors.plain};
    border-radius: 5px;
    font-family: ${({ theme }) => theme.fonts.fontFamily};
`
