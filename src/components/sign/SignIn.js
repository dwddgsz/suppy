import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import history from '../../history/init'
import firebase from '../../firebase/init';

class SignIn extends Component {
    state = {
        signInEmail:'',
        signInPassword: '',
        emailErrorMessage: '',
        passwordErrorMessage: '',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            emailErrorMessage:'',
            passwordErrorMessage:''
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.signInEmail,this.state.signInPassword)
        .then((data)=>{
            this.setState({
                signUpEmail: '',
                signUpPassword: '',
                emailErrorMessage: '',
                passwordErrorMessage: '',
            })
            history.push('/');
        })
        .catch(error=>{
            switch(error.code){
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                this.setState({emailErrorMessage:error.message})
                break;
                case 'auth/wrong-password':
                 this.setState({passwordErrorMessage:error.message})
                break;
                default:
                return;
            }
        })
    
    }

    render(){
    return (
        <FormStyled>
             <header className="form__title-container">
            <h2 className="form__title">Sign in</h2>
            </header>
            <form className="form" onSubmit={this.handleOnSubmit}>
                <div className="form__field">
                    <label htmlFor="signInEmail">Email</label>
                    <input type="email" id="signInEmail" value={this.state.signInEmail} onChange={this.handleOnChange}></input>
    <p>{this.state.emailErrorMessage}</p>
                </div>
                <div className="form__field">
                    <label htmlFor="signInPassword">Password</label>
                    <input type="password" id="signInPassword" value={this.state.signInPassword} onChange={this.handleOnChange}></input>
    <p>{this.state.passwordErrorMessage}</p>
                </div>
            <ButtonStyled primary>Confirm</ButtonStyled>
            </form>
            <p className="form__change-text">
                Don't have an account yet?<Link to="/sign-up" className="form__change-link">Sign Up</Link>
            </p>
        </FormStyled>
    )
    }
}

export default SignIn
