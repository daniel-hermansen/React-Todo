import React from "react";

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

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state= {
            newItem: ""
        };
    }

    handleChanges = e => {
        this.setState({...this.state, newItem: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newItem);
        this.setState({
            newItem: ""
        });
    };

    render() {
        console.log("Rendering Form");
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input 
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                    placeholder="Create New Task"
                    value={this.state.newItem}
                />
                <Button>Add</Button>
            </Form>
        );
    }
}


export default TodoForm;