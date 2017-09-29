import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css';
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      	<Route exact path="/" component={WelcomePage}/>
      </Router>
       <HistoryContainer/>
      </div>
    );
  }
}

export default App;
