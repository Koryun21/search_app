import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  border: 1px solid black;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 80px;
  grid-row-gap: 36px;
`

export const ButtonWrapper = styled.div`
    align-self: end;
`