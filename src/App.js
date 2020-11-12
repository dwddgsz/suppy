import React,{Component} from 'react';
import {Router,Switch,Route} from 'react-router';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/sign/SignUp'
import SignIn from './components/sign/SignIn'
import Explore from './components/explore/Explore';
import Details from './components/explore/Details';
import MyList from './components/myList/MyList';
import Create from './components/myList/Create';
import NotFound from './components/problems/NotFound';
import AuthRequired from './components/problems/AuthRequired'
import AlreadySignedIn from './components/problems/AlreadySignedIn'
import history from './history/init';
import firebase from './firebase/init';

const AppWrapper = styled.div`
max-width:1440px;
margin:0 auto;
`


class App extends Component {
    state = {
      isUserSignedIn: false,
    }

    handleUserStatus = () =>{
      firebase
      .auth()
      .onAuthStateChanged((user)=>{
        if (user) {
          this.setState({isUserSignedIn:true})
        }
        else {
          this.setState({isUserSignedIn:false})
        }
      })
    }

    componentDidMount(){
      this.handleUserStatus();
    }

  render(){
  return (
    <div className="App">
      <Router history={history}>
      <Navbar isUserSignedIn={this.state.isUserSignedIn}/>
      <AppWrapper>
      <Switch>
      <Route path="/" exact component={Explore} />
      <Route path="/details/:id" component={this.state.isUserSignedIn?Details:AuthRequired} />
      <Route path="/my-list" component={this.state.isUserSignedIn?MyList:AuthRequired} />
      <Route path="/create" component={this.state.isUserSignedIn?Create:AuthRequired} />
      <Route path="/sign-in" component={this.state.isUserSignedIn?AlreadySignedIn:SignIn} />
      <Route path="/sign-up" component={this.state.isUserSignedIn?AlreadySignedIn:SignUp} />
      <Route component={NotFound} />
      </Switch>
      </AppWrapper>
      </Router>
    </div>
  );
  }
}

export default App;
