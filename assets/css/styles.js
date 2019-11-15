import { css } from 'lit-element'

export default css`

  /* ESTILOS DE ETIQUETA */
  :root {
    --main-color: #072146;
    --secondary-color #1d73b2;
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
    padding: 24px 28px 50px 29px;
    margin: 28px auto;
    margin-top: 5px;
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
    grid-template-columns: 70% 30%;

  }

  .options {
    display: grid;
    justify-items: start;
    grid-template-columns: 50% 50%;
    
  }
  
`