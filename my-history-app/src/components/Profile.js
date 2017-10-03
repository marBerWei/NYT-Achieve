import React from 'react'

export default class Profile extends React.Component {
  state = {
    firstName: localStorage.getItem("firstName"),
    lastName:localStorage.getItem("lastName"),
    email: localStorage.getItem("email")
  }

  render(){
    return (
      <div>
        <h1>Profile Page</h1>
        <h4> Email: {this.state.email} </h4>
        <h4> First Name: {this.state.firstName}</h4>
        <h4> Last Name: {this.state.lastName}</h4>
        <div><h1>Favorite Articles</h1></div>
      </div>

    )
  }
}
