import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component 
{
    //constructor
    constructor(props)
    {
        super(props);

        this.state = 
        {
            email: '',
            results: '',
            password: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    //handler for data from child component
    onEmailChange(email)
    {
        console.log("From the child: " + email);

        this.setState( () => 
        {
                return {
                    email
                };
            }
        );

        console.log("From the parent state: " + this.state.email);
    }

    //handler for data from child component
    onPasswordChange(password)
    {
        console.log("From the child: " + password);

        this.setState( () => 
        {
                return {
                    password
                };
            }
        );

        console.log("From the parent state: " + this.state.password);
    }

    onFormSubmit(event)
    {

        event.preventDefault();

        // const results = "Email address is: " + this.state.email + "Password is: " + this.state.password;
        const results = "Email address is: " + this.state.email;

        this.setState( () => 
        {
                return {
                    results
                };
            }
        );

        //this is also lifting state to the parent
        this.props.onFormSubmit(results);
    }

    render() 
{
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} />
                    <PasswordInput onPasswordInputChange={this.onPasswordChange} />
                    <p>Ensure Map Location is Correct</p>
                    <button type="submit" 
                            form="onSubmit"
                            className="btn btn-primary"
                            value="Submit"
                            >Submit</button>
                </form>
            </div>            
        );
    };
}

export default LoginForm;