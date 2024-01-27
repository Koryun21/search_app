import styled from 'styled-components';

export const MainWrapper = styled.main`
    width: calc(100% - 400px);
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media screen and ${({theme}) => theme.media.desktopL} {
        width: calc(100% - 200px);
    }
    
    @media screen and ${({theme}) => theme.media.desktop} {
        width: 100%;    
    }
`