import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon?_limit=20")
    .then( r => r.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  theFunctionThatReturnsFilteredArray = () => {
    let filterOriginalArray = this.state.pokemons.filter( pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })
    return filterOriginalArray
  }

  addOnePokemon = (pokemonObj) => {
    let properlyFormatedPokemon = {
      name: pokemonObj.name,
      sprites: {
        front: pokemonObj.frontUrl,
        back: pokemonObj.backUrl
      },
      stats: [{ name: "hp", value: pokemonObj.hp}]
    }
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'content-type': 'application.json'
      },
      body: JSON.stringify(properlyFormatedPokemon)
    })
    .then( r => r.json())
    .then( newPokemon => {
      let newArray = [...this.state.pokemons, newPokemon]
      this.setState({
        pokemons: newArray
      })
    })
  }

  render() {
    // console.log(this.state)


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemons={this.theFunctionThatReturnsFilteredArray()}/>
      </Container>
    )
  }
}

export default PokemonPage
