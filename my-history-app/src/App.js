import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import Nav from './components/Nav'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import SignUp from './components/SignUp'



class App extends Component {

  handleLogout = (event) => {
    localStorage.removeItem("jwtToken")
    return <Redirect to="/"/>
  }

  render() {

    if(localStorage.getItem("jwtToken")){


    return (
      <div className="App">
      	<Route exact path="/" component={WelcomePage}/>
       <Nav handleLogout= {this.handleLogout} />
       <HistoryContainer/>
      </div>
    )
    } else {
     return (
    <div className="App">
       <Nav />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signUp" component={SignUp}/>
      <HistoryContainer/>
    </div>
    )
    }

  }
}

export default App;
