import React from 'react';
import {Link} from 'react-router-dom';
import TitleStyled from '../styled/TitleStyled';
import ButtonStyled from '../styled/ButtonStyled';




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
