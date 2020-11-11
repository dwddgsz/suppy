import React from 'react';
import TitleStyled from '../styled/TitleStyled';
import ButtonStyled from '../styled/ButtonStyled';
import styled from 'styled-components';
import {Link} from 'react-router-dom';




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
