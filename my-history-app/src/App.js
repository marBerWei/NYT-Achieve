import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Route exact path="/" component={WelcomePage}/>
        <HistoryContainer/>
      </div>
    )
 
  }
}

export default App;
