import React,{Component} from 'react';
import TitleStyled from '../styled/TitleStyled';
import styled from 'styled-components';
import firebase from '../../firebase/init'
import ButtonStyled from '../styled/ButtonStyled';
import {Link} from 'react-router-dom'


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
    line-height:1.5;
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
            max-width:480px;
        }
    }
}



`


class Details extends Component {
    state = {
    }

     fetchData = () => {
        firebase
        .firestore()
        .collection('requests')
        .doc(this.props.match.params.id)
        .get()
        .then((data)=>{
           this.setState({...data.data()})
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
    return (
        <DetailsWrapper>
            <TitleStyled>Details</TitleStyled>
            <ul className="details__list">
                <li className="details__title-container"><h3 className="details__title">request</h3></li>
                <li className="details__field">
                    <h4 className="details__field-title">Title</h4>
                    <h5 className="details__field-description">{this.state.requestTitle}</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">description</h4>
                    <h5 className="details__field-description">{this.state.requestDescription}</h5>
                </li>
            </ul>

            <ul className="details__list">
                <li className="details__title-container"><h3 className="details__title">Location and Date</h3></li>
                <li className="details__field">
                    <h4 className="details__field-title">Country</h4>
                    <h5 className="details__field-description">{this.state.country}</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">City</h4>
                    <h5 className="details__field-description">{this.state.city}</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">Home Adress</h4>
                    <h5 className="details__field-description">{this.state.homeAdress}</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">Date</h4>
                    <h5 className="details__field-description">{this.state.date}</h5>
                </li>
            </ul>

            <ul className="details__list">
                <li className="details__title-container"><h3 className="details__title">Contact</h3></li>
                <li className="details__field">
                    <h4 className="details__field-title">Contact Email</h4>
                    <h5 className="details__field-description">{this.state.contactEmail}</h5>
                </li>
                <li className="details__field">
                    <h4 className="details__field-title">Contact phone number</h4>
                    <h5 className="details__field-description">{this.state.contactNumber}</h5>
                </li>
            </ul>
        <Link to="/">
        <ButtonStyled primary>Home</ButtonStyled>
        </Link>
        </DetailsWrapper>
    )
    }
}

export default Details
