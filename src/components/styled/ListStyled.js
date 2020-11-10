import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.ul`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
margin: 0 auto;
padding: 0 10px;
`


const ListStyled = (props) => {
    return (
    <ListWrapper>{props.children}</ListWrapper>
    )
}



export default ListStyled
