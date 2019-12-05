import { css } from 'lit-element'

export default css`

  /* ESTILOS DE ETIQUETA */
  :root, html {
    --main-color: #072146;
    --secondary-color: #1d73b2;
    --third-color: #1d7bb2;
  }

  body, div, h1 {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  h1 {
    font-weight: 100;
  }


  /* ESTILOS DE CLASE */
  .button-success,
  .button-cancel,
  .button-error,
  .button-warning,
  .button-secondary {
    color: white;
    border: 0;
    margin: 0;
    padding: 6px 6px;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .button-success {
    background: #072146;
  }

  .button-cancel {
    color: black;
    background: #D3D3D3;
  }

  .button-error {
    background: rgb(202, 60, 60); /* this is a maroon */
  }

  .button-warning {
    background: rgb(223, 117, 20); /* this is an orange */
  }

  .button-secondary {
    background: rgb(66, 184, 221); /* this is a light blue */
  }

  .card {
    display: grid;
    background: #FAFAFA;
    padding: 16px 28px 28px 29px;
    margin: 28px auto;
    margin-top: 14px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    border: 3px solid #305A72;
  }

  .centerText {
    text-align: center;
    color: red;
  }

  .inComplete {
    max-width: 88%;
    justify-items: start;
  }

  .inMiddle {
    max-width: 50%;
    justify-items: center;
  }

  .row {
    display: block;
    padding: 10px 0;
  }

  .menu {
    display: grid;
    justify-items: end;
    grid-template-columns: 61% 30% 9%;
    position: fixed;
    margin-top: -26px;
    margin-left: 43rem;

  }

  .options {
    display: grid;
    justify-items: center;
    grid-template-columns: 50% 50%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: gray 0px 0px 0px 1px;
  }

  .option {
    padding: 8px;
    font-size: 12px;
    text-align: center;
  }

  .optionsIsHidden {
    display: none;
    visibility: hidden;
  }
  
`