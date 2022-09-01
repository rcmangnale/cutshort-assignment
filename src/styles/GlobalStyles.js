import { createGlobalStyle } from 'styled-components';
import { breakPoints } from '../breakpoint';

export const GlobalStyles = createGlobalStyle`


@tailwind base;
	@tailwind components;
	@tailwind utilities;
 /* reset */
 	 *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
			box-sizing: inherit;
  }

  :root{
    --font-primary:'Inter', sans-serif;

		--color-primary: #664de4;
		--color-progress-complete: #664de4;
		--color-progress-incomplete:#ecedee;

		--color-primary-text: #000000;
		--color-primary-text-dark: #5b5b5b;
		--color-primary-text-medium: #8B97B1;
		--color-primary-text-light: #ffffff;

		--color-group-input-background:#F8F9FC;
		--color-input-border:#eff0f2;

		--color-font: #000000;
  }

	body{
		color: var(--color-font);
		font-family: var(--font-primary);
		-webkit-font-smoothing: antialiased;
	}

   /* font size responsiveness */
  html {
		box-sizing: border-box;

		@media only screen and (min-width: ${breakPoints.XLarge}) {
				font-size: 100% !important; // 16px
		}

		@media only screen and (max-width: ${breakPoints.XLarge}) {
			font-size: 87.5% !important; // 14px
		}

		@media only screen and (max-width: ${breakPoints.Large}) {
				font-size: 75% !important; // 12px
		}
		
		@media only screen and (max-width: ${breakPoints.Medium}) {
				font-size: 62.5% !important; // 10px
		}
	}
	
	::selection {
		background-color: var(--color-primary);
		color: #ffff;
	}
	
`;
