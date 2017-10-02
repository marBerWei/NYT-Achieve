import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
class Nav extends React.Component {
  render() {
    return (
      <div className="ui inverted menu">
        <NavLink activeClassName="active red item" className="item" to="/">Home</NavLink>
        <NavLink className="item right" to="/SignUp">Sign Up</NavLink>
        <NavLink className="item right" to="/Login">Login</NavLink>
      </div>
    )
  }
}
export default Nav
