import React from 'react'
import PokemonCard from './PokemonCard'

const Search = props => {

  const helpWithChange = (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    props.handleSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={helpWithChange} value={props.searchTerm}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
