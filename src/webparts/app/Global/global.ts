import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors: */
    --unnamed-color-e37222: #E37222;
    --cereja-vale: #C0305E;
    --verde-aqua: #0ABB98;
    --azul-vale: #3CB5E5;
    --cinza-escuro: #555555;
    --cinza-claro: #D3D3D3;
    --verde-vale: #007E7A;
    --branco: #FFFFFF;
    --amarelo-vale: #ECB11F;


    /* Font/text values */
    --unnamed-font-family-segoe-ui: Segoe UI;
    --unnamed-font-style-normal: normal;
    --unnamed-font-weight-600: 600px;
    --unnamed-font-size-12: 12px;
    --unnamed-font-size-18: 18px;
    --unnamed-character-spacing-0: 0px;
    --unnamed-line-spacing-16: 16px;
    --unnamed-line-spacing-21: 21px;


    --unnamed-font-normal-600-18-26-segoi: normal normal 600 18px/26px Segoe UI;
    --unnamed-font-normal-600-14-21-segoi: normal normal 600 14px/21px Segoe UI; 
    --unnamed-font-normal-600-12-16-segoi: normal normal normal 12px/16px Segoe UI;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
