import React,{Component} from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';

class Create extends Component {
    state = {
        requestTitle: '',
        requestDescription: '',
        country:'',
        city:'',
        homeAdress:'',
        contactEmail: '',
        contactNumber:'',
    }

    
    handleOnChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.requestTitle);
        console.log(this.state.requestDescription);
        console.log(this.state.country);
        console.log(this.state.city);
        console.log(this.state.homeAdress);
        console.log(this.state.contactEmail);
        console.log(this.state.contactNumber);
    }
    
    render(){
    return (
        <FormStyled>
             <header className="form__title-container">
            <h2 className="form__title">Create</h2>
            </header>
            <form className="form" onSubmit={this.handleOnSubmit}>
                <div className="form__field">
                    <label htmlFor="requestTitle">request title</label>
                    <input type="text" id="requestTitle" value={this.state.requestTitle} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="requestDescription">request description</label>
                    <textarea id="requestDescription" value={this.state.requestDescription} onChange={this.handleOnChange}></textarea>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="country">country</label>
                    <input type="text" id="country" value={this.state.country} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="city">city</label>
                    <input type="text" id="city" value={this.state.city} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="homeAdress">home adress</label>
                    <input type="text" id="homeAdress" value={this.state.homeAdress} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="contactEmail">Contact Email</label>
                    <input type="email" id="contactEmail" value={this.state.contactEmail} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                <div className="form__field">
                    <label htmlFor="contactNumber">Contact phone</label>
                    <input type="number" id="contactNumber" value={this.state.contactNumber} onChange={this.handleOnChange}></input>
                    <p></p>
                </div>
                            
            <div className="terms">
                <input type="checkbox"></input>
                <p>I've read and I agree to the <span>terms</span></p>
                </div>                
            <ButtonStyled primary>Add</ButtonStyled>
            </form>
        </FormStyled>
    )
    }
}

export default Create

