import React,{Component} from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    state = {
        signUpEmail: '',
        signUpPassword: '',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.signUpEmail);
        console.log(this.state.signUpPassword);
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
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="signUpPassword">Password</label>
                    <input type="password" id="signUpPassword" value={this.state.signUpPassword} onChange={this.handleOnChange}></input>
                    <p></p>
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
