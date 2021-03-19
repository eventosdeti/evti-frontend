import { createGlobalStyle } from "styled-components";

import UbuntuRegular from "../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf";

import { ROOT_FONT_SIZE } from "../../settings";

const GlobalStyles = createGlobalStyle`
	@font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegular}); format("ttf");
	};
	body {
    font-size: ${ROOT_FONT_SIZE}; 
    font-family: Ubuntu;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    color: ${(props) => props.theme.palette.primaryTextColor};
	};
`;

export default GlobalStyles;
