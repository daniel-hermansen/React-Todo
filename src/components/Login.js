import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import styled from 'styled-components';

const Form = styled.form`
    margin-bottom: 5px;
`

const Button = styled.button`
    background-color: #9d03fc;
    border: 2px solid #55008a;
    color: white;
    font-size: 16px;
    padding: 6px 14px;
    cursor: pointer;
    margin-top: 16px;
`

const Input = styled.input`
    background: transparent;
    border: none;
    border-bottom: 2px solid #55008a;
    padding-bottom: 6px;
    padding-top: 6px;
    margin-right: 5px;
    width: 190px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
      font-size: 1rem;
    }
    :-ms-input-placeholder {
       color: white;
       font-size: 1rem;
    }
`

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
   		this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }});
        console.log(this.state.credentials);
    }

    handleSubmit = e => {
    	e.preventDefault();
        this.setState({...this.state, isLoading: true});



    }   

    render() {
        return (
            <div className="LoginPage">
                <Form onSubmit={this.handleSubmit}>
                    <Input name="username" placeholder="Username" onChange={this.handleChange}/>
                    <Input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>
                    <Button>Login</Button>
                </Form>
                {this.state.isLoading && <div><h3>Logging in</h3></div>}
            </div>
        )
    }
}

export default Login;