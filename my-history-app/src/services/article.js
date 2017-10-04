export function createArticle( articleParams ) {
  const body = JSON.stringify(articleParams)
	return fetch("http://localhost:3001/article", {
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
