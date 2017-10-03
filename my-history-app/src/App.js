import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import HistoryContainer from './components/HistoryContainer'
import Nav from './components/Nav'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'

class App extends Component {

  handleLogout = (event) => {
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
    localStorage.removeItem("email")
    return <Redirect to="/"/>
  }

  render() {

    if (localStorage.getItem("jwtToken")) {

      return (
        <div className="App">
          <Nav handleLogout={this.handleLogout}/>
           <Route exact path="/home" render= {(props) =>
              <HistoryContainer {...props}/> }
            />
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/me" component={Profile}/>    
        </div>
      )
    } else {
      return (
        <div className="App">
          <Nav/>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/home" render= {(props) =>
              <HistoryContainer {...props}/> }
            />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>

        </div>
      )
    }

  }
}

export default App;
