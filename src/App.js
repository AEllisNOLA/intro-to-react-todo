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
      ],
      newToDoDescription: ''
    };
  }

  deleteToDo(index) {
    const arrayCopy = this.state.todosArray.slice();
    const filteredArray = arrayCopy.filter((task, ind) => ind !== index);
    this.setState({ todosArray: filteredArray })
  }

  handleChange(event) {
    this.setState({newToDoDescription: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.newToDoDescription) {return}
    const newToDo = { description: this.state.newToDoDescription, isCompleted: false};
    this.setState({todosArray: [...this.state.todosArray, newToDo], newToDoDescription: ''})

  }


  toggleComplete(index) {
    const arrayCopy = this.state.todosArray.slice();
    const task = arrayCopy[index];
    task.isCompleted = task.isCompleted ? false : true;
    this.setState ( {arrayCopy: arrayCopy} )
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todosArray.map( (task, index) => 
          <ToDoItem 
          key={index} 
          description={task.description} 
          isCompleted={task.isCompleted} 
          toggleComplete={ () => this.toggleComplete(index)}
          deleteToDo={() => this.deleteToDo(index)}/>)}
        </ul>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.newToDoDescription} onChange={(event) => this.handleChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;