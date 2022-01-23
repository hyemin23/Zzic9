import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }

    html {
        overscroll-behavior-y: contain; // 당겨서 새로고침 막기
        overflow: hidden;
    }

    html,body {
        -webkit-text-size-adjust: none; // 뷰포트 변경 시 자동 폰트 조절 방지
        padding : 0;
        margin : 0;
        font-family: 'Spoqa Han Sans', 'sans-serif';
        overscroll-behavior-y: none; // 당겨서 새로고침 막기
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
