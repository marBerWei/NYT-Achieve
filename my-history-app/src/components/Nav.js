import React from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {
  render() {
    if (localStorage.getItem("jwtToken")) {
      return (
        <div className="ui inverted menu">
          <NavLink activeClassName="active red item" className="item" to="/home">Home</NavLink>
          <NavLink className="item" to="/home" onClick={this.props.handleLogout}>Logout</NavLink>
          <NavLink className="item right" to="/me">My Profile</NavLink>
        </div>
      )
    } else {
      return (
        <div className="ui inverted menu">
          <NavLink activeClassName="active red item" className="item" to="/home">Home</NavLink>
          <NavLink className="item" to="/signup">Sign Up</NavLink>
          <NavLink className="item" to="/login">Login</NavLink>
        </div>
      )
    }
  }
}
export default Nav
