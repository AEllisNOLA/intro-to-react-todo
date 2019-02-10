import React, { Component } from 'react';
import './App.css';

import ToDoItem from './components/ToDoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todosArray: [
        { description: "Walk the cat", isCompleted: true },
        { description: "Throw the dishes away", isCompleted: false},
        { description: "Buy new dishes", isCompleted: false}
      ]
    }
  }

  toggleComplete(index) {
    const todosArrayCopy = this.state.todosArray.slice();
    const task = todosArrayCopy[index];
    task.isCompleted = task.isCompleted ? false : true;
    this.setState ( {todosArrayCopy: todosArrayCopy} )
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todosArray.map( (task, index) => 
          <ToDoItem key={index} description={task.description} isCompleted={task.isCompleted} toggleComplete={ () => this.toggleComplete(index)}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
