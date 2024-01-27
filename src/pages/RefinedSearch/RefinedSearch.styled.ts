import styled from "styled-components";

export const RefinedSearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  @media screen and ${({theme}) => theme.media.desktop} {
      padding: 16px;
      gap: 8px;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  color: ${({theme}) => theme.colors.basicColorGrayMedium};

  @media screen and ${({theme}) => theme.media.desktop} {
      display: none;
  }
`
