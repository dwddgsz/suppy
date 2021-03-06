import React, { Component } from 'react';
import CardStyled from '../styled/CardStyled';
import ListStyled from '../styled/ListStyled';
import TitleStyled from '../styled/TitleStyled';
import history from '../../history/init';
import firebase from '../../firebase/init';
import {firebaseLooper} from '../../firebase/firestoreLooper';

class Explore extends Component {
    state = {
        data: [],
    }

     fetchData = () => {
        firebase
        .firestore()
        .collection('requests')
        .orderBy('createdAt','desc')
        .get()
        .then(snapshot=>{
            this.setState({data:firebaseLooper(snapshot)})
    })  
    }

    componentDidMount(){
        this.fetchData()
    }

    checkForRender = () => {
        if (this.state.data.length !== 0) {
            return this.state.data.map(element=>{
                return <CardStyled key={element.id} dataId={element.id} requestTitle={element.requestTitle} date={element.date} country={element.country} city={element.city} buttonMessege="more" handleOnClick={this.handleOnClick}/>
            })
        }
        else {
            return null
        }
    }

    handleOnClick = (e) =>{
        const currentElementId = e.target.parentElement.getAttribute('data-id');
        history.push(`/details/${currentElementId}`);
    }
    
    render(){
    return (
        <>
        <TitleStyled>{this.state.data.length ===0? 'Explore section is currently empty' : 'Explore'}</TitleStyled>
        <ListStyled>
        {this.checkForRender()}
        </ListStyled>
        </>
    )
    }
}

export default Explore
