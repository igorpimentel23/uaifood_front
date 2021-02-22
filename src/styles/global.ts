import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', sans-serif;
  }

  .color-white {
    color: ${colors.white};
  }

  .color-fading-gray {
    color : ${colors.fadingGray};
  }

  .color-light-gray {
    color: ${colors.lightGray};
  }

  .color-gray {
    color: ${colors.gray};
  }

  .color-dark-gray {
    color: ${colors.darkGray};
  }

  .color-strong-gray {
    color: ${colors.strongGray};
  }

  .color-green {
    color: ${colors.green};
  }

  .fs-xs {
    font-size: 14px;
  }

  .fs-sm {
    font-size: 18px;
  }

  .fs-md {
    font-size: 20px;
  }

  .fs-lg {
    font-size: 24px;
  }

  .fs-xl {
    font-size: 60px;
  }

  .fw-light {
    font-weight: 300;
  }

  .fw-semi-bold {
    font-weight: 600;
  }

  .fw-extra-bold {
    font-weight: 800;
  }

  .top {
    top: 0;
  }
`;
