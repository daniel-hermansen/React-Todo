import React from "react";
import Todo from "./Todo";

import styled from 'styled-components';

const Button = styled.button`
    background-color: #9d03fc;
    border: 2px solid #55008a;
    color: white;
    font-size: 16px;
    padding: 6px 14px;
    cursor: pointer;
    margin-top: 16px;
`

const TodoList = props => {
    return (
        <div>
            <div className="todo-list">
                {props.tasks.map(task => (
                    <Todo 
                        key={task.id}
                        task={task}
                        toggleCompleted={props.toggleCompleted}
                    />
                ))}
            </div>
            <Button  onClick={props.clearCompleted}>
                Clear Completed Tasks
            </Button>
        </div>
    )
}

export default TodoList;