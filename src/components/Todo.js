import React from "react";
import styled from 'styled-components';

const Todo = props => {
    return(
        <div
            className={`task${props.task.completed ? " completed" : ""}`}
            onClick= {e => props.toggleCompleted(props.task.id)}
        >
            <p>{props.task.name}</p>
        </div>
    );
};

export default Todo;