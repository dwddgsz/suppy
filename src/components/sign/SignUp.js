import React,{Component} from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import {Link} from 'react-router-dom';
import firebase from '../../firebase/init';
import history from '../../history/init'

class SignUp extends Component {
    state = {
        signUpEmail: '',
        signUpPassword: '',
        emailErrorMessage: '',
        passwordErrorMessage: '',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
            emailErrorMessage:'',
            passwordErrorMessage:''
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.signUpEmail,this.state.signUpPassword)
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
                case 'auth/email-already-in-use':
                this.setState({emailErrorMessage:error.message})
                break;
                case 'auth/weak-password':
                this.setState({passwordErrorMessage:error.message})
                break;
                default:
                return;
            }
        })
    }

    render() {
    return (
        <FormStyled>
             <header className="form__title-container">
            <h2 className="form__title">Sign Up</h2>
            </header>
            <form className="form" onSubmit={this.handleOnSubmit}>
                <div className="form__field">
                    <label htmlFor="signUpEmail">Email</label>
                    <input type="email" id="signUpEmail" value={this.state.signUpEmail} onChange={this.handleOnChange}></input>
    <p>{this.state.emailErrorMessage}</p>
                </div>
                <div className="form__field">
                    <label htmlFor="signUpPassword">Password</label>
                    <input type="password" id="signUpPassword" value={this.state.signUpPassword} onChange={this.handleOnChange}></input>
    <p>{this.state.passwordErrorMessage}</p>
                </div>
                <div className="terms">
                <input type="checkbox"></input>
                <p>I've read and I agree to the <span>terms</span></p>
                </div>  
            <ButtonStyled primary>Confirm</ButtonStyled>
            </form> 

            <p className="form__change-text">
                Already have an accout? <Link to="/sign-in" className="form__change-link">Sign Ip</Link>
            </p>
        </FormStyled>
    )
    }
}

export default SignUp;
