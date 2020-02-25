import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      pokemonData: [],
      filterTerm: ""
    }
  }

pokemonFlipHandler(){
  console.log('hello')
}

changeFilterTerm = (e) => {
  this.setState({filterTerm: e})
}

filterPokemon = () => {
  let {pokemonData, filterTerm} = this.state
  let filteredPokemonArray = pokemonData.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm)
  })
  return filteredPokemonArray
}

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(pokemons => this.setState({pokemonData: pokemons, filteredPokes: pokemons}))
  }

  renderNewPokemon = (pokemon) => {
    console.log(pokemon)
    let newArray = [...this.state.pokemonData, pokemon]

    this.setState({ pokemonData: newArray })
    // return newArray
    // let poketoadd = 
    // this.setState({
      
    //   pokemonData: [...pokemonData]
    // })
    
  }

  
  // this.setState({[e.target.name]: e.target.value })



  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm renderNewPokemon={this.renderNewPokemon}/>
        <br />
        <Search onChange={(e) => this.changeFilterTerm(e.target.value)} filterTerm={this.state.filterTerm}  />
        <br />
        <PokemonCollection pokemonData={this.filterPokemon()} pokemonFlipHandler={this.pokemonFlipHandler}/>
      </Container>
    )
  }
}

export default PokemonPage
