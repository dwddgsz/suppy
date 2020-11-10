import React from 'react';
import CardStyled from '../styled/CardStyled';
import ListStyled from '../styled/ListStyled';
import TitleStyled from '../styled/TitleStyled';

const Explore = () => {
    return (
        <>
        <TitleStyled>explore</TitleStyled>
        <ListStyled>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="more"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="more"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="more"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="more"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="more"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="more"/>
        </ListStyled>
        </>
    )
}

export default Explore
