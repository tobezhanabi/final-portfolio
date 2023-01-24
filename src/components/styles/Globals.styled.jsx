import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, 
*::before,
*::after{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
}
html{
    font-family: "Merriweather sans", monospace;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.colors.white};
    font-size:12px;
    background: ${({ theme }) => theme.colors.dark};
   
}
a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    transition: all 250ms ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.colors.yellow};
    }
}

ul{
    list-style: none;
}
hr{
    background: linear-gradient(
        to right,
         ${({ theme }) => theme.colors.dimBlue} 12%,
         ${({ theme }) => theme.colors.yellow} 88%
    );
    border: 0;
    height: 2px;

}
`;
