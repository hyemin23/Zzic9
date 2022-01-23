import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }

    html {
        /* // 당겨서 새로고침 막기 */
        overscroll-behavior-y: contain; 
        overflow: hidden;
        height: 100%;
    }

    html,body {
        /* // 뷰포트 변경 시 자동 폰트 조절 방지 */
        -webkit-text-size-adjust: none; 
        padding : 0;
        margin : 0;
        font-family: 'Spoqa Han Sans', 'sans-serif';
        overscroll-behavior-y: none; 
        /* // 당겨서 새로고침 막기 */
    }

    a{
        color : inherit;
        text-decoration: none;
        &:hover {
            color: inherit;
        }
    }
`;

export default GlobalStyle;
