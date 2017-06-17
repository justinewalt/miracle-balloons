import React, { Component } from 'react';
import Search from './components/SearchForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Miracle Balloons 2.0</h2>
          <h3>#Doityourself!</h3>
        </div>
        <p className="App-intro">
          To get started, what company are you representing?
        </p>
        <Search />
      </div>
    );
  }
}

export default App;
