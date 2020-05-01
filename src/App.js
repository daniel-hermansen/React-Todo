
import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

const tasks = [
  {
    name: 'Clean Bathrooms',
    id: 121,
    completed: false
  },
  {
    name: 'Buy Groceries',
    id: 122,
    completed: false
  },
  {
    name: 'Walk Dog',
    id: 123,
    completed: false
  },
  {
    name: 'Vacuum',
    id: 124,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      taskList: tasks,
      name: ""
    };
  }

  addNewTask = newTaskName => {
    const newState = {
      ...this.state,
      taskList: [
        ...this.state.taskList,
        { name: newTaskName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = itemId => {
    console.log("dh: App.js: App: toggleCompleted: itemId: ", itemId);
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (task.id === itemId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      taskList: this.state.taskList.filter(task => {
        return !task.completed;
      })
    };
    this.setState(newState);
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className= "app">
        <div className= "header">
          <h2>My To-do List:</h2>
          <h4>"Where Getting Things Done Always Sparks Joy"</h4> 
        </div>
        <div className="main">
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList 
          tasks={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
        </div>
      </div>
    );
  }
}

export default App;