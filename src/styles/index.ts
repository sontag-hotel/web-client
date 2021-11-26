import {createGlobalStyle} from 'styled-components';
import 'modern-normalize/modern-normalize.css';
// import woff2 from '../public/fonts/open-sans-v16-latin-regular.woff2';
// import woff from '../public/fonts/open-sans-v16-latin-regular.woff';
// @font-face {
//   font-family: 'Open Sans';
//   font-style: normal;
//   font-weight: 400;
//   font-display: fallback;
//   src: local('Open Sans Regular'), local('OpenSans-Regular'),
//     url('${woff2}') format('woff2'), url('${woff}') format('woff');
// }
const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
export const colors = {
  primary: '#643A14',
  secondary: '#C0C0C0',
  accent: '#FF673B',
  text: '#000000',
  textSecondary: '#858585',
  background: '#FFFFFF',
  backgroundGray: '#F8F8F8',
  backgroundModal: 'rgba(0,0,0,0.2)',
  border: '#CBCBCB',
};

const styled = {createGlobalStyle};

export const GlobalStyle = styled.createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    background: ${colors.background};
    color: ${colors.text};
  }
  #modal {
    > div {
      background: ${colors.backgroundModal};
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  h1 {
    font-size: 3.6rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: normal;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: normal;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
