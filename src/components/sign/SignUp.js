import React from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <FormStyled>
             <header className="form__title-container">
            <h2 className="form__title">Sign Up</h2>
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

export default SignUp;
