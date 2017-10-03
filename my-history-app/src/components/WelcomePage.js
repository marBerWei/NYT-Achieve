import React from 'react'
//import {Route} from 'react-router-dom'


const WelcomePage = () => {
  const enterWebsite = (e) => {
    e.preventDefault()
    window.location = "/home"
  }

  return (

    <div>
      <img src="https://avatars3.githubusercontent.com/u/221409?v=4&s=400" alt=""/>
      <h1>Welcome to the New York Times Archive!</h1><br/>
      <button className="ui blue button" onClick={enterWebsite}>Enter</button>
    </div>

  )
}

export default WelcomePage
