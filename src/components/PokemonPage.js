import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Checkbox from './Checkbox'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    shownPokemon: [],
    searchTerm: "",
    sort: false,
    checked: false
  }

  // initial fetch of all Pokemon from API on render
  componentDidMount() {
    this.initialFetchPokemon()
  }
  initialFetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then( r => r.json() )
    .then( fetchedPokemon => {
      this.setState({ 
        allPokemon: fetchedPokemon,
        shownPokemon: fetchedPokemon
      })
    })
  }
  // --------------------------------------

  // handles controlling the search field and setting the correct filtered pokemon to display
  handleSearch = (e) => {
    console.log(e.target.value)
    let filteredPokemon = this.state.allPokemon.filter( pokemon => pokemon.name.includes(e.target.value.toLowerCase()) )
    this.setState({
      searchTerm: e.target.value,
      shownPokemon: filteredPokemon,
      checked: false
    })
  }
  // --------------------------------------

  // handles POSTing a new pokemon to the back end based off of the form being submitted
  handleFormSubmit = (pokemonObj) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pokemonObj)
    })
    .then( r => r.json() )
    .then( newPokemon => {
      let pokemonArray = this.state.allPokemon.slice()
      this.setState({
        allPokemon: [...pokemonArray, newPokemon],
        shownPokemon: [...pokemonArray, newPokemon]
      })
    })
  }
  // --------------------------------------

  // sorts and unsorts pokemon alphabetically on checbox click
  handleAlphabeticalSort = () => {
    if (this.state.sort === false) {
      let sortedPokemon = this.state.shownPokemon.slice()
      sortedPokemon.sort( (a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
      })
      this.setState({
        shownPokemon: sortedPokemon,
        sort: true,
        checked: true
      })
    } else if (this.state.sort === true) {
      let unsortedPokemon = this.state.shownPokemon.slice()
      unsortedPokemon.sort( (a, b) => a.id - b.id )
      this.setState({
        shownPokemon: unsortedPokemon,
        sort: false,
        checked: false
      })
    }
  }
  // --------------------------------------

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          handleFormSubmit={this.handleFormSubmit} 
        />
        <br />
        <Search
          onChange={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <h4>Sort Pokemon alphabetically:</h4>
        <Checkbox
          checked={this.state.checked}
          handleAlphabeticalSort={this.handleAlphabeticalSort}
        />
        <br />
        <br />
        <PokemonCollection
          pokemon={this.state.shownPokemon}
        />
      </Container>
    )
  }
}

export default PokemonPage
