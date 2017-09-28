import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HistoryContainer from './components/HistoryContainer'


import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HistoryContainer/>
      </div>
    );
  }
}

export default App;
