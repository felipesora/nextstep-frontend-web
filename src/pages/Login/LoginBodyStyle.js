import { createGlobalStyle } from "styled-components";

export const LoginBodyStyle = createGlobalStyle`
  body {
    background: var(--cor-fundo);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media (max-width: 480px) {
      padding: 15px;
    }
  }
`;