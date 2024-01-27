import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
    
  & > button {
      max-width: min-content;
      align-self: center;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, auto));
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: space-between;
`