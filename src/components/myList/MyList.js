import React from 'react'
import CardStyled from '../styled/CardStyled';
import ListStyled from '../styled/ListStyled';
import TitleStyled from '../styled/TitleStyled';


const MyList = () => {
    return (
        <>
        <TitleStyled>my list</TitleStyled>
        <ListStyled>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="done"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="done"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="done"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="done"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="done"/>
            <CardStyled title='shopping' location='Poland, Warsaw' date='28.10.99 14:45' buttonMessage="done"/>
        </ListStyled>
        </>
    )
}

export default MyList
