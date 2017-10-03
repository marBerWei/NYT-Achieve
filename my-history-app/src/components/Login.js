import React from 'react'


class Login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    

    const loginParams= {email: this.state.email, password: this.state.password}
    const body = JSON.stringify(loginParams)
    //console.log(body)
    fetch("http://localhost:3001/login", {
      method: 'post',
      body: body,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then((res) => {
        return res.json()
      }
      )
      .then((json) => {
        console.log(json)
      })

    this.setState({
      email: "",
      password: ""
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })

  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render(){
	return (
		<div className="ui middle aligned center aligned grid">
  			<div className="column">
    			<h2 id="login-header" className="ui red image header">
      				<div className="content">Login to your account</div>
    			</h2>
    			<form className="ui large form" >
      			<div className="ui stacked segment">

        		<div className="field">
          		<div className="ui left icon input">

            	<input type="text" name="email" placeholder="E-mail address" onChange= {this.handleEmailChange} value={this.state.username}/>
          		</div>
        		</div>
        	<div className="field">
          	<div className="ui left icon input">
            	<input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
          	</div>
        	</div>
					<h4>No Account Yet? <a href="/SignUp">Sign Up Here</a></h4>
        	<div className="ui fluid large red submit button" onClick={this.handleSubmit}>Login</div>
      		</div>

   </form>
   </div>

</div>


		)
}
}

export default Login
