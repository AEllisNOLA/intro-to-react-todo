import React, { Component } from 'react';
import './App.css';

import ToDoItem from './components/ToDoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDoItem />
          <ToDoItem />
        </ul>
      </div>
    );
  }
}

export default App;
