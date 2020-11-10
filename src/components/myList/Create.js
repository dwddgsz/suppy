import React from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';

const Create = () => {
    return (
        <FormStyled>
             <header className="form__title-container">
            <h2 className="form__title">Create</h2>
            </header>
            <form className="form">
                <div className="form__field">
                    <label htmlFor="request-title">request title</label>
                    <input type="text" id="request-title"></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="request-description">request description</label>
                    <textarea id="request-description"></textarea>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="country">country</label>
                    <input type="text" id="country"></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="city">city</label>
                    <input type="text" id="city"></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="home-adress">home adress</label>
                    <input type="text" id="home-adress"></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="contact-email">Contact Email</label>
                    <input type="email" id="contact-email"></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="phone-number">Contact phone</label>
                    <input type="number" id="phone-number"></input>
                    <p></p>
                </div>
            <ButtonStyled primary>Add</ButtonStyled>
            </form>
        </FormStyled>
    )
}

export default Create

