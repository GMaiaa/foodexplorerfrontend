import styled from 'styled-components'

export const Container = styled.button`

    background-color: ${({theme})=> theme.COLORS.TOMATO_100};
    color: ${({theme})=> theme.COLORS.LIGHT_100};

    width: 100%;
    height: 4.8rem;

    border-radius: 0.5rem;

    padding: 1.2rem 3.2rem;

    &:disabled{
        opacity: 0.5;
    }

    @media (max-width: 425px){
        font-size: 1.4rem;
        padding: 0.4rem;
    }
`;