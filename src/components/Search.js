import React from 'react'

const Search = props => {

  const helpWithChange = (e) => {
    console.log(e.target.value)
    props.handleSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={helpWithChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
