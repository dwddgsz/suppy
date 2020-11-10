import React from 'react'
import styled from 'styled-components';
import ButtonStyled from '../styled/ButtonStyled';


const CardWrapper = styled.li`
width:220px;
margin: 0 20px 40px;
box-shadow:0px 2px 3px rgba(0,0,0,.4);
background-color: #fafafa;
padding-bottom:7px;
.card__head {
    background-color:var(--blue)
}
.card__title {
    padding: 5px 0;
    font-size:1.6rem;
    font-weight:600;
    text-align:center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.4);
    text-transform:capitalize;
    letter-spacing:1px;
    color: var(--white);
}
.card__items {
padding: 13px 5px 0;
}
.card__item {
    font-size:1.2rem;
    color: var(--black);
    &:first-child{
        margin-bottom:8px;
    }
}
.card__icon {
    margin-right:5px;
    font-size:1.5rem;
    &--location {
        padding-left:2px;
    }
}
`


const CardStyled = (props) => {
    return (

        <CardWrapper>
                <header className="card__head">
                    <h5 className="card__title">{props.title}</h5>
                </header>
                <ul className="card__items">
                    <li className="card__item">
                        <span className="fas fa-map-marker-alt card__icon card__icon--location"></span>
    <span className="card__info">{props.location}</span>
                    </li>
                    <li className="card__item">
                        <span className="fas fa-clock card__icon"></span>
    <span className="card__info">{props.date}</span>
                    </li>
                </ul>
    <ButtonStyled>{props.buttonMessage}</ButtonStyled>            
        </CardWrapper>
        
    )
}

export default CardStyled