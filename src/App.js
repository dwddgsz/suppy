import React from 'react';
import {Router,Switch,Route} from 'react-router';
import history from './history/init';
import Navbar from './components/navbar/Navbar';
import Explore from './components/explore/Explore';
import Details from './components/explore/Details';
import NotFound from './components/problems/NotFound';
import AuthRequired from './components/problems/AuthRequired'
import MyList from './components/myList/MyList';
import styled from 'styled-components';
import SignIn from './components/sign/SignIn'
import SignUp from './components/sign/SignUp'
import Create from './components/myList/Create';

const AppWrapper = styled.div`
max-width:1440px;
margin:0 auto;
`


function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Navbar />
      <AppWrapper>
      <Switch>
      <Route path="/" exact component={Explore} />
      <Route path="/details/:id" component={Details} />
      <Route path="/my-list" component={MyList} />
      <Route path="/create" component={Create} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/auth" component={AuthRequired} />
      <Route component={NotFound} />
      </Switch>
      </AppWrapper>
      </Router>
    </div>
  );
}

export default App;
