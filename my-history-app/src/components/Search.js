import React from 'react'

const Search = (props) => {

  let date = props.todaysDate
  let finalizedDate = date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6)

  const onSearch = (event) => {
    event.preventDefault()
    let input = document.getElementById('date-search')
    props.handleSearch(event, input)
  }

  return (
    <div className="ui input">
      <form onSubmit={onSearch}>
        <div>
          <input id="date-search" type="date" name="bday" min="1851-10-01" defaultValue={finalizedDate}/>
          <input className="ui red button" type="submit"/>
        </div>
      </form>
    </div>

  )
}

export default Search
