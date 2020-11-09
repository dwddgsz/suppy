import React from 'react'
import styled from 'styled-components';

const TitleWrapper = styled.h2`
padding: 50px 0;
font-size:4rem;
font-weight:700;
text-align:center;
text-transform:capitalize;
`


const TitleStyled = (props) => {
    return (
        <TitleWrapper>
            {props.children}
        </TitleWrapper>
)



}

export default TitleStyled;
