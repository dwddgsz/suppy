import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --blue:#a2d5f2;
  --white:#fff;
  --black:#1c1c1c;
}
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}


html,body {
  height:100%;
}

html {
  font-size:62.5%;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: var(--blue);
}

a {
  text-decoration:none;
  color: var(--black);
}

ul {
  list-style:none;
}

input:focus,button:focus {
  outline:none;
}


`

ReactDOM.render(
  <>
  <GlobalStyle />
    <App />
    </>,
  document.getElementById('root')
);
