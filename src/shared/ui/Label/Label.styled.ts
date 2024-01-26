import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const LabelStyled = styled.label`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.basicColorBlack};
`;
