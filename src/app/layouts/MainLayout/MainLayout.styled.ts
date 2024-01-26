import styled from 'styled-components';

export const MainWrapper = styled.main`
    width: calc(100% - 400px);
    max-width: 1200px;
    min-height: 100vh;
    border: 1px solid ${(props) => props.theme.basicColorBlack};
    margin: 0 auto;
`