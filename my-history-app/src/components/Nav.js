import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
  	if(localStorage.getItem("jwtToken")){
	    return (
	      <div className="ui inverted menu">
	        <NavLink activeClassName="active red item" className="item" to="/">Home</NavLink>
	        <NavLink className="item" to="/home" onClick={this.props.handleLogout}>Logout</NavLink>
	      </div>
	    )
  	} else {
  		return (
	      <div className="ui inverted menu">
	        <NavLink activeClassName="active red item" className="item" to="/">Home</NavLink>
	        <NavLink className="item" to="/signUp">Sign Up</NavLink>
	        <NavLink className="item" to="/login">Login</NavLink>
	      </div>
	    )
  	}
  }
}
export default Nav
