import React from 'react'
import { NavLink } from 'react-router-dom'
class Nav extends React.Component {
  render() {
    return (
      <div className="ui inverted menu">
        <NavLink activeClassName="active red item" className="item" to="/">Home</NavLink>
        <NavLink className="item right" to="/logout">Logout</NavLink>
      </div>
    )
  }
}
export default Nav
