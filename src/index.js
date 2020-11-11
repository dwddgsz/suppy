import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

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


a {
  text-decoration:none;
  color: var(--black);
}

li {
  list-style:none;
}

a:focus,input:focus,button:focus {
  outline:none;
}

button,input {
  font-family: 'Montserrat', sans-serif;
}
button {
  color: var(--white);
}

`

ReactDOM.render(
  <>
        <GlobalStyle />
        <App/>
    </>,
  document.getElementById('root')
);
