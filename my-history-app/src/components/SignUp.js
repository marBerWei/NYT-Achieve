import React from 'react'


const SignUp = () => {
	return (	
		<div class="ui middle aligned center aligned grid">
  			<div class="column">
    			<h2 id="login-header" class="ui red image header">
      				<div class="content">Sign up for an account</div>
    			</h2>
    			<form class="ui large form">
      			<div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
              <input type="text" name="first-name" placeholder="First Name"/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
              <input type="text" name="last-name" placeholder="Last Name"/>
              </div>
            </div>       
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

        	<div class="ui fluid large red submit button">Sign Up</div>
          <h4>Already a fan? <a href="/Login">Sign in here</a></h4>
      		</div>

   </form>
   </div>

</div>

	
		)
}

export default SignUp