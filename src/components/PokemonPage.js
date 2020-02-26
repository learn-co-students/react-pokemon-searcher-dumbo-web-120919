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

  componentDidMount (){
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then(resp => this.setState({
      pokemons: resp
    }))
  }

  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  filteredArray = () => {
    let searchArray = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })
    return searchArray
  }

  addOnePokemon = newPokemon => {
    let newCard = {
      name: newPokemon.name,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      },
      stats: [{
        value: newPokemon.hp,
        name: "hp"
      }]
    }
    console.log(newCard)

    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
    })
    .then(r => r.json())
    .then(newPokemon => {
      let newArray = [...this.state.pokemons,newPokemon]
      this.setState({ pokemons: newArray})
    })
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search value={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemons={this.filteredArray()}/>
      </Container>
    )
  }
}

export default PokemonPage
