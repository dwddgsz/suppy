import React from 'react';
import {Link} from 'react-router-dom';
import TitleStyled from '../styled/TitleStyled';
import ButtonStyled from '../styled/ButtonStyled';




const AlreadySignedIn = () => {
    return (
        <>
        <TitleStyled>You are already signed in</TitleStyled>
        <Link to='/'>
        <ButtonStyled primary>Home</ButtonStyled>
        </Link>

        </>
    )
}

export default AlreadySignedIn;
