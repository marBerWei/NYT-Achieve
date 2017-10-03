import React from 'react'


const Login = () => {
	return (
		<div class="ui middle aligned center aligned grid">
  			<div class="column">
    			<h2 id="login-header" class="ui red image header">
      				<div class="content">Login to your account</div>
    			</h2>
    			<form class="ui large form">
      			<div class="ui stacked segment">

        		<div class="field">
          		<div class="ui left icon input">

            	<input type="text" name="email" placeholder="E-mail address"/>
          		</div>
        		</div>
        	<div class="field">
          	<div class="ui left icon input">
            	<input type="password" name="password" placeholder="Password"/>
          	</div>
        	</div>
					<h4>No Account Yet? <a href="/SignUp">Sign Up Here</a></h4>
        	<div class="ui fluid large red submit button">Login</div>
      		</div>

   </form>
   </div>

</div>


		)
}

export default Login
