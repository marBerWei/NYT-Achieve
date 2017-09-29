import React from 'react'

const Filter = (props) => {
  const onFilter = (event) => {
    return props.handleFilter(event)
  }
  return(
    <input type="text" onChange={onFilter}/>
  )
}


export default Filter
