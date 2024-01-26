import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }  
`

export const theme = {
  basicColorBlack:'#000000',
  basicColorBlack60:'#666666',
  basicColorGrayMedium:'#CCCCCC',
  basicColorWhite:'#FFFFFF',
  primaryColorGreen:'#37B86B',
  secondaryColorPink:'#FF006B'
}