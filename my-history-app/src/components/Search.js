import React from 'react'

const Search = (props) => {

  const onSearch = (event) => {
    event.preventDefault()
    let input = document.getElementById('history')
    props.handleSearch(event, input)
  }

  return(
    <div>
    <form onSubmit={onSearch}>
      <h3>Enter a date after October 1st, 1850:</h3>
      <input id="history" type="date" name="bday" min="1851-10-01"/>
      <input type="submit"/><br/><br/><br/>
    </form>
    </div>

  )
}



export default Search
