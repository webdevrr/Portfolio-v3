import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Monument';
        src: local('Monument'), url("/fonts/monument.woff2") format("woff2");
        font-weight: 300;
        font-style: normal;
    }
`;
