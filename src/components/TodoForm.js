import React from "react";

import styled from 'styled-components';

const Button = styled.button`
    background-color: #9d03fc;
    border: 1px solid #55008a;
    color: white;
    font-size: 16px;
    padding: 6px 14px;

    margin-top: 16px;
`

const Input = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid #55008a;
    padding-bottom: 6px;
    padding-top: 6px;
    margin-right: 5px;
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
            <form onSubmit={this.handleSubmit}>
                <Input 
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                    placeholder="Add Task"
                    value={this.state.newItem}
                />
                <Button>Add</Button>
            </form>
        );
    }
}


export default TodoForm;