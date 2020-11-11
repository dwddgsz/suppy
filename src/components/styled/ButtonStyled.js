import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
display:block;
margin:${props=>props.primary?'15px auto':'10px auto 0'};
padding: ${props=>props.primary?'8px 15px':'4px 8px'};
border:none;
font-size:${props=>props.primary?'2.2rem':'1.6rem'};
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
    const checkForButtonType = () =>{
        if (props.primary) {
            return (
                <ButtonWrapper primary onClick={props.handleOnClick}>
                    {props.children}
                </ButtonWrapper>
            )
        }
        else {
            return (
                <ButtonWrapper onClick={props.handleOnClick}>
                    {props.children}
                </ButtonWrapper>
            )

        }
    }
    return (
        <>
        {checkForButtonType()}
        </>
    )
}

export default ButtonStyled
