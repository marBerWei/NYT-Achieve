import React from 'react'

const Filter = (props) => {
  const onFilter = (event) => {
    return props.handleFilter(event)
  }
  return(
    <div className="ui large input" id="filter">
      <input type="text" placeholder="Filter..." onChange={onFilter}/>
    </div>
  )
}


export default Filter
