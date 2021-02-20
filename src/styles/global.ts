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
    font-size: 14pt;
  }

  .fs-sm {
    font-size: 18pt;
  }

  .fs-md {
    font-size: 20pt;
  }

  .fs-lg {
    font-size: 24pt;
  }

  .fs-xl {
    font-size: 60pt;
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
