import React,{Component} from 'react'
import FormStyled from '../styled/FormStyled';
import ButtonStyled from '../styled/ButtonStyled';
import firebase from '../../firebase/init'
import history from '../../history/init'


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
        const user = firebase.auth().currentUser;
        const date = new Date();
        const getMonth = () => {
            switch(date.getMonth()){
                case 0:{
                    return 'January';
                }
                case 1:{
                    return 'February';
                }
                case 2:{
                    return 'March';
                }
                case 3:{
                    return 'April';
                }
                case 4:{
                    return 'May';
                }
                case 5:{
                    return 'June';
                }
                case 6:{
                    return 'July';
                }
                case 7:{
                    return 'August';
                }
                case 8:{
                    return 'September';
                }
                case 9:{
                    return 'October';
                }
                case 10:{
                    return 'November';
                }
                case 11:{
                    return 'December';
                }
                default:
                    return;
            }
        }
        const currentDate = `${date.getDate()} ${getMonth()} ${date.getFullYear()} ${date.getHours()} ${date.getMinutes()}`;
        firebase.firestore().collection('requests').add({...this.state,userId:user.uid,date:currentDate}).then(()=>{
            this.setState({
                requestTitle: '',
                requestDescription: '',
                country:'',
                city:'',
                homeAdress:'',
                contactEmail: '',
                contactNumber:'',
            })
        })
        .then(()=>{
            history.push('/')
        })
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
                    <input type="text" id="requestTitle" maxLength="15" value={this.state.requestTitle} onChange={this.handleOnChange}></input>
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
                    <input type="number" id="contactNumber" max="999999999" value={this.state.contactNumber} onChange={this.handleOnChange}></input>
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

