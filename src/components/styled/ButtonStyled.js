import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
display:block;
margin:15px auto;
padding: 8px 15px;
border:none;
font-size:2.2rem;
font-weight:600;
text-align:center;
text-shadow: 1px 1px 2px rgba(0,0,0,.4);
text-transform:uppercase;
letter-spacing:1px;
background-color: var(--blue);
transition:.3s opacity;
cursor:pointer;
&:hover,&:focus {
    opacity:0.6;
}

`

const ButtonStyled = (props) => {
    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    )
}

export default ButtonStyled
