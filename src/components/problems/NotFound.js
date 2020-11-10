import React from 'react';
import TitleStyled from '../styled/TitleStyled';
import ButtonStyled from '../styled/ButtonStyled';
import styled from 'styled-components';
import {Link} from 'react-router-dom';




const NotFound = () => {
    return (
        <>
        <TitleStyled>Page not found</TitleStyled>
        <Link to='/'>
        <ButtonStyled primary>Home</ButtonStyled>
        </Link>

        </>
    )
}

export default NotFound;
