import React from 'react';
import TitleStyled from '../styled/TitleStyled';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
.details__list {
max-width:280px;
margin:0 auto 30px;
box-shadow:0px 2px 3px rgba(0,0,0,.4);
background-color: #fafafa;
@media screen and (min-width:767px) {
    max-width:650px;
}
}

.details__title-container {
padding:20px 0 10px;
color: var(--black);
background-color: var(--blue);
}

.details__title {
    padding: 5px 0;
    font-size:2.4rem;
    font-weight:600;
    text-align:center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.4);
    text-transform:capitalize;
    letter-spacing:1px;
    color: var(--white);
}
.details__field {
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px 0;
    color: var(--black);
    &-title {
        padding:0 10px 10px;
        font-size:1.5rem;
        font-weight:600;
        text-transform:capitalize;

    }
    &-description {
        max-width:280px;
        word-wrap: break-word;
        font-weight:400;
        text-align:center;
        font-size:1.3rem;
        padding:0 10px;
        @media screen and (min-width:767px) {
            max-width:600px;
        }
    }
}



`


const Details = () => {
    return (
        <DetailsWrapper>
            <TitleStyled>Details</TitleStyled>
            <ul className="details__list">
                <li className="details__title-container"><h3 className="details__title">request</h3></li>
                <li className="details__field">
                    <h4 className="details__field-title">title</h4>
                    <h5 className="details__field-description">shopping</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">description</h4>
                    <h5 className="details__field-description">i need someone to do shopping for me. List: fish,chips,sth,lorem lidsp fadfad ,cx cxcxdsad,dasdasdsa ,zcxfkofnm,vdvsdjincads,dsdddddddddddddddddddddddd Lorem2 ldsadas caifmsakda dsa das daskdoasmfasmkc csa csaoocsmacs  ds</h5>
                </li>
            </ul>

            <ul className="details__list">
                <li className="details__title-container"><h3 className="details__title">Location</h3></li>
                <li className="details__field">
                    <h4 className="details__field-title">Country</h4>
                    <h5 className="details__field-description">Poland</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">City</h4>
                    <h5 className="details__field-description">Warsaw</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">Home Adress</h4>
                    <h5 className="details__field-description">Wilan 3</h5>
                </li>
            </ul>

            <ul className="details__list">
                <li className="details__title-container"><h3 className="details__title">Contact</h3></li>
                <li className="details__field">
                    <h4 className="details__field-title">Contact Email</h4>
                    <h5 className="details__field-description">contact@contact.contact</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">Contact phone number</h4>
                    <h5 className="details__field-description">999999999</h5>
                </li>
                
            </ul>
        </DetailsWrapper>
    )
}

export default Details
