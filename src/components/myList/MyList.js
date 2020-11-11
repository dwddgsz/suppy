import React,{Component} from 'react'
import CardStyled from '../styled/CardStyled';
import ListStyled from '../styled/ListStyled';
import TitleStyled from '../styled/TitleStyled';
import firebase from '../../firebase/init';
import {firebaseLooper} from '../../firebase/firestoreLooper';


class MyList extends Component{
    state = {
        data: [],
    }

     fetchData = () => {
        const currentUserId = firebase.auth().currentUser.uid;

        firebase
        .firestore()
        .collection('requests')
        .where('userId','==',currentUserId)
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
                console.log(element)
                return <CardStyled key={element.id} requestTitle={element.requestTitle} date={element.date} country={element.country} city={element.city} buttonMessege="done"/>
            })
        }
    }

    render(){
        return (
        <>
        <TitleStyled>my list</TitleStyled>
        <ListStyled>
            {this.checkForRender()}
        </ListStyled>
        </>
    )
        }
}

export default MyList
