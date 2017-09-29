import React from 'react'
import { NavLink } from 'react-router-dom'
class Nav extends React.Component {
  render() {
    return (
      <div className="ui black secondary menu">
        <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
        <NavLink className="item right" to="/logout">Logout</NavLink>
      </div>
    )
  }
}
export default Nav
