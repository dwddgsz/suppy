import React,{Component} from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import {Link} from 'react-router-dom';

class SignIn extends Component {
    state = {
        signInEmail:'',
        signInPassword: '',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.signInEmail)
        console.log(this.state.signInPassword)
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
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="signInPassword">Password</label>
                    <input type="password" id="signInPassword" value={this.state.signInPassword} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                <div className="terms">
                <input type="checkbox"></input>
                <p>I've read and I agree to the <span>terms</span></p>
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
