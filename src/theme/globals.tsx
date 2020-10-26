import { css } from 'linaria';

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

  }
`;