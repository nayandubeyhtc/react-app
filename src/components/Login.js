import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateUsername(event) {
        console.log('updateUsername: ', event.target.value)
        this.setState({ username: event.target.value })
    }

    updatePassword(event) {
        console.log('updatePassword: ', event.target.value)
        this.setState({ password: event.target.value })
    }


    handleSubmit() {
        console.log('Your username value is: ' + this.state.username)
        console.log('Your password value is: ' + this.state.password)
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
                    <div className="mb-2" style={{marginTop: '10%'}}>
                        <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
                        <input type="email" onChange={this.updateUsername} className="form-control" id="exampleFormControlInput1" placeholder="Enter your email/username!" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input type="password" onChange={this.updatePassword} className="form-control" id="exampleFormControlInput2" placeholder="Enter your password!" />
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary"
                     style={{ marginTop: '2%',width: '98%',
                     marginLeft: '1%' }}>Login!</button>

                    <p style={{
                        marginTop: '3%',
                        width: '100%',
                        textAlign: 'center'
                    }}>Don't have account?</p>
                    <Link to={"/signup"}>
                        <button type="button" className="btn btn-primary" style={{width: '-webkit-fill-available'}}>
                             Sign up Here!</button>
                    </Link>

                </div>
            </div>
        )
    }
}

export default Login
