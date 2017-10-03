import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import SignUp from './components/SignUp'


class App extends Component {

  // componentDidMount(){
  //   fetch("http://localhost:3001/Me")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json)
  //   })
  // }

  render() {
    return (
      <div className="App">
      	<Route exact path="/" component={WelcomePage}/>
      	<Route exact path="/login" component={Login}/>
      	<Route exact path="/signUp" component={SignUp}/>
       <HistoryContainer/>
      </div>
    )

  }
}

export default App;
