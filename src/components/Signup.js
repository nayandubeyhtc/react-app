import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Signup extends Component {
 
     constructor(props) {
        super(props);

        this.state = {
            name: '',
            surename: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            city: '',
            country: ''
        }

        this.updateName = this.updateName.bind(this);
        this.updateSurename = this.updateSurename.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateCountry = this.updateCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(event) {
        console.log('updateName: ', event.target.value)
        this.setState({ name: event.target.value })
    }

    updateSurename(event) {
        console.log('updateSurename: ', event.target.value)
        this.setState({ surename: event.target.value })
    }

    updateUsername(event) {
        console.log('updateUsername: ', event.target.value)
        this.setState({ username: event.target.value })
    }

    updateEmail(event) {
        console.log('updateEmail: ', event.target.value)
        this.setState({ email: event.target.value })
    }

    updatePassword(event) {
        console.log('updatePassword: ', event.target.value)
        this.setState({ password: event.target.value })
    }

    updateConfirmPassword(event) {
        console.log('updateConfirmPassword: ', event.target.value)
        this.setState({ confirmPassword: event.target.value })
    }

    updateCity(event) {
        console.log('updateCity: ', event.target.value)
        this.setState({ city: event.target.value })
    }

    updateCountry(event) {
        console.log('updateCountry: ', event.target.value)
        this.setState({ country: event.target.value })
    }

    handleSubmit() {
        console.log('Your name value is: ' + this.state.name);
        console.log('Your surename value is: ' + this.state.surename);
        console.log('Your username value is: ' + this.state.username);
        console.log('Your email value is: ' + this.state.email);
        console.log('Your password value is: ' + this.state.password);
        console.log('Your confirmPassword value is: ' + this.state.confirmPassword);
        console.log('Your city value is: ' + this.state.city);
        console.log('Your country value is: ' + this.state.country);
     
        //Send state to the server code
    }

    render() {

        const centreDesign = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }
        return (
            <div style={centreDesign} style={{
                backgroundColor: this.props.mode === 'dark' ? '#010d19' : 'white',
                color: this.props.mode === 'dark' ? 'white' : 'black'
            }}>
                <div className="row" >
                    <div className="mb-2"  style={{ marginTop: '10%' }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="name" onChange={this.updateName} className="form-control"
                         id="updateName" placeholder="Enter your name!" />
                    </div>
                    <div className="mb-2"  >
                        <label htmlFor="exampleFormControlInput1" className="form-label">Surename</label>
                        <input type="name" onChange={this.updateSurename} className="form-control"
                         id="updateSurename" placeholder="Enter your surename!" />
                    </div>
                    <div className="mb-2"  >
                        <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                        <input type="name" onChange={this.updateUsername} className="form-control" 
                        id="updateUsername" placeholder="Enter your username!" />
                    </div>
                    <div className="mb-2"  >
                        <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
                        <input type="email" onChange={this.updateEmail} className="form-control" 
                        id="updateEmail" placeholder="Enter your email!" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input type="password" onChange={this.updatePassword} className="form-control"
                         id="exampleFormControlInput2" placeholder="Enter your password!" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Confirm Password</label>
                        <input type="password" onChange={this.updateConfirmPassword}
                         className="form-control" id="updatePassword" placeholder="Enter your confirm password!" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">City</label>
                        <input type="password" onChange={this.updateCity}
                         className="form-control" id="updateCity" placeholder="Enter your city!" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Country</label>
                        <input type="password" onChange={this.updateCountry}
                         className="form-control" id="updateCountry" placeholder="Enter your country!" />
                    </div>

                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary"
                        style={{
                            marginTop: '2%', width: '98%',
                            marginLeft: '1%'
                        }}>Sign up!</button>

                    <p style={{
                        marginTop: '3%',
                        width: '100%',
                        textAlign: 'center'
                    }}>Already have an Account?</p>
                    <Link to={"/login"}>
                        <button type="button" className="btn btn-primary" style={{ width: '-webkit-fill-available' }}>
                            Login here!</button>
                    </Link>

                </div>
            </div>
        )
    }
}

export default Signup
