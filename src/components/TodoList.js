import React from "react";
import Todo from "./Todo";

import styled from 'styled-components';

const Button = styled.button`
    background-color: #9d03fc;
    border: 1px solid #55008a;
    color: white;
    font-size: 16px;
    padding: 6px 14px;

    margin-top: 16px;
`

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo 
                    key={task.id}
                    task={task}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <Button  onClick={props.clearCompleted}>
                Clear Completed Tasks
            </Button>
        </div>
    )
}

export default TodoList;
