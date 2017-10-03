export function loginUser(loginParams){
	const body = JSON.stringify(loginParams)
	return fetch("http://localhost:3001/login", {
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


}
