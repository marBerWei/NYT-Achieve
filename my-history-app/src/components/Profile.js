import React from 'react'
// import HistoryList from './HistoryList'

class Profile extends React.Component {
  state = {
    firstName: localStorage.getItem("firstName"),
    lastName:localStorage.getItem("lastName"),
    email: localStorage.getItem("email"),
    events: []
  }

  render(){
    return (
      <div>
          <div className="ui blue centered card" id="user-card">
          <div className="content">
            <h2> First Name: {this.state.firstName}</h2>
            <h2> Last Name: {this.state.lastName}</h2>
            <div className="meta">
            <h2> Email: {this.state.email} </h2>
            </div>
          </div>
        </div>
        <div><h1>Favorite Articles</h1></div>
    </div>
    )
  }
}

export default Profile
