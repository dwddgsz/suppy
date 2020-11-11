import React from 'react'
import styled from 'styled-components';
import ButtonStyled from './ButtonStyled'


const FormWrapper = styled.div`
width:300px;
padding-bottom:15px;
margin:60px auto 0;
box-shadow:0px 2px 3px rgba(0,0,0,.4);
@media screen and (min-width:767px) {
    width:360px;
}
.form__title-container {
    background-color: var(--blue);
}
.form__title {
    padding: 20px 0;
    font-size:2.6rem;
    font-weight:600;
    text-align:center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.4);
    text-transform:capitalize;
    letter-spacing:1px;
    color: var(--white);
}
.form {
    padding: 0 10px;
}
.form__field {
    display:flex;
    flex-direction:column;
    padding: 20px 0;

    label {
        padding:0 0 10px 5px;
        font-size:1.6rem;
        text-transform:capitalize;
        color: var(--black);
    }
    textarea,input {
        max-width:100%;
        max-height:500px;
        padding:10px;
        border-radius:0;
        border:none;
        letter-spacing:1px;
        background-color: #f7f7f7;
        color: var(--black);
        &:focus {
            background-color: #e3e3e3;
        }
    }
    p {
        padding:5px 0 0 5px;
        color: red;
    }
}
.form__change-text {
font-size:1.2rem;
text-align:center;
color: var(--black);
}
.form__change-link {
font-weight:600;
padding-left:3px;
transition:.3s opacity;
&:hover,&:focus {
    opacity:.6;
}
}
.terms {
    display:flex;
    align-items:center;
    justify-content:center;
    input {
        margin-right:5px;
    }
    p {
        font-size:1.5rem;
        color:var(--black);
        span {
            color: var(--blue);
            cursor:pointer;
            transition:.3s;
            &:hover,&:focus {
                opacity:.6;
            }
        }
    }
}
` 



const FormStyled = (props) => {
    return (
        <FormWrapper>
            {props.children}
            {/* <div className="form__title-container">
            <h2 className="form__title">Sign in</h2>
            </div>
            <form className="form">
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"></input>
                    <p>error</p>
                </div>
                <div className="form__field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"></input>
                    <p>error</p>
                </div>
            <ButtonStyled primary>Confirm</ButtonStyled>
            </form> */}
        </FormWrapper>
    )
}

export default FormStyled