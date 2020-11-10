import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h2`
padding: 40px 20px;
font-size:2.8rem;
text-align:center;
text-transform:capitalize;
line-height:1.3;
color: var(--black);
@media screen and (min-width:767px) {
    font-size:3rem;
}
`



const TitleStyled = (props) => {
    return (
    <TitleWrapper>{props.children}</TitleWrapper>
    )
}


export default TitleStyled;