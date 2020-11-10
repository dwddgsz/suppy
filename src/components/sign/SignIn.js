import React from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import {Link} from 'react-router-dom';

const SignIn = () => {
    return (
        <FormStyled>
             <header className="form__title-container">
            <h2 className="form__title">Sign in</h2>
            </header>
            <form className="form">
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"></input>
                    <p></p>
                </div>
            <ButtonStyled primary>Confirm</ButtonStyled>
            </form>
            <p className="form__change-text">
                Don't have an account yet?<Link to="/sign-up" className="form__change-link">Sign Up</Link>
            </p>
        </FormStyled>
    )
}

export default SignIn
