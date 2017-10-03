import React from 'react'
import {loginUser} from '../services/user'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const loginParams = {
      email: this.state.email,
      password: this.state.password
    }

    loginUser(loginParams).then((user) => {
      localStorage.setItem("jwtToken", user.jwt)
      localStorage.setItem("firstName", user.user.first_name)
      localStorage.setItem("lastName", user.user.last_name)
      localStorage.setItem("email", user.user.email)
      this.setState({
        jwt: user.jwt
      })

      this.setState({email: "", password: ""})
    })
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})

  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  render() {

    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/home"/>
    } else {

      return (

        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 id="login-header" className="ui red image header">
              <div className="content">Login to your account</div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">

                <div className="field">
                  <div className="ui left icon input">

                    <input type="text" name="email" placeholder="E-mail address" onChange={this.handleEmailChange} value={this.state.username}/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                  </div>
                </div>
                <h4>No Account Yet?
                  <a href="/SignUp">Sign Up Here</a>
                </h4>
                <div className="ui fluid large blue submit button" onClick={this.handleSubmit}>Login</div>
              </div>

            </form>
          </div>

        </div>

      )
    }
  }
}

export default Login
