import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => (
      this.setState({
        pokemonArray: data
      })
    )) 
  }

  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  addOnePokemon = (pokObj) => {

    // pokObj = {name: "sarah", hp, frontUrl: backUrl: ""}

    // how he used destructuring
    // let formattedPokemon = {
    //   name: pokObj.name
    //   sprites: {
    //     front: pokObj.frontUrl,
    //     back: pokObj.backUrl
    //   }
    //   stats: [{name: "hp", value: pokObj.hp}]
    // }
    let formattedPokemon = {
      name: pokObj.name,
      sprites: {
        back: pokObj.backUrl,
        front: pokObj.frontUrl
      },
      stats: [{name: "hp", value: pokObj.hp}]

    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formattedPokemon)
    })
    .then(r => r.json())
    .then(newPokemon => {
      let newArray = [...this.state.pokemonArray, newPokemon]
      this.setState({
        pokemonArray: newArray
      })
    })
  }


  render() {
   
    let filteredArray = this.state.pokemonArray.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemonArray={filteredArray}/>
      </Container>
    )
  }
}

export default PokemonPage
