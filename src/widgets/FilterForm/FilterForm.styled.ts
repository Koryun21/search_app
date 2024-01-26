import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  border: 1px solid black;
  grid-template-columns: repeat(3, minmax(auto,350px));
  grid-column-gap: 80px;
  grid-row-gap: 36px;
`

export const ButtonWrapper = styled.div`
  align-self: end;
`

export const RangeSelect = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const SelectBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 50%;
  max-width: 50%;
  min-width: 150px;
`

export const ErrorText = styled.p`
  position: absolute;
  font-size: 12px;
  top: 100%;
  width: 100%;
  color: #c04444;
`