import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import SignUp from './components/SignUp'


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Route exact path="/" component={WelcomePage}/>
      	<Route exact path="/Login" component={Login}/>
      	<Route exact path="/SignUp" component={SignUp}/>
      <div id="modal"></div>
       <HistoryContainer/>
      </div>
    )
 
  }
}

export default App;
