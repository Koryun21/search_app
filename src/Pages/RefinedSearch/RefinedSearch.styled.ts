import styled from "styled-components";

export const RefinedSearchWrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Devider = styled.hr`
  width: 100%;
  color: ${({theme}) => theme.basicColorGrayMedium};
`
