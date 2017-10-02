import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      	<Route exact path="/" component={WelcomePage}/>
      </Router>
      <div id="modal"></div>
       <HistoryContainer/>
      </div>
    );
  }
}

export default App;
