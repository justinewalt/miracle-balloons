import React from 'react';
import SearchForm from './components/SearchForm';
import Contact from './components/Contact';
import Reorder from './components/Reorder';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Miracle Balloons 2.0</h2>
      <h3>#Doityourself!</h3>
    </div>
    <p className="App-intro">
      To get started, what company are you representing?
    </p>
    <SearchForm />
    <Contact />
    <Reorder />
  </div>
)

export default App;
