import React, { Component } from 'react';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Filter from './components/Filter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos></Todos>
        <Filter></Filter>
      </div>
    );
  }
}

export default App;
