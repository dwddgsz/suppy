import React from 'react';
import {Link} from 'react-router-dom';
import TitleStyled from '../styled/TitleStyled';
import ButtonStyled from '../styled/ButtonStyled';




const AuthRequired = () => {
    return (
        <>
        <TitleStyled>You need to be signed in to see this content</TitleStyled>
        <Link to='/sign-in'>
        <ButtonStyled primary>Sign in</ButtonStyled>
        </Link>

        </>
    )
}

export default AuthRequired
