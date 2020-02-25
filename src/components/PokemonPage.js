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
      searchForm: "",
      filteredPokes: []
    }
  }

pokemonFlipHandler(){
  console.log('hello')
}

handleSearch = (e) => {
  let filteredPokes = this.state.pokemonData
  filteredPokes = filteredPokes.filter((pokemon) => {
    let pokemonName = pokemon.name.toLowerCase()
    console.log(pokemonName)
    return pokemonName.indexOf(
      e.target.value.toLowerCase()) !== -1
  })
  this.setState({
    filteredPokes
  })
// console.log(e.target.value)
// this.setState({searchForm: [e.target.value]})


}

  

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(pokemons => this.setState({pokemonData: pokemons, filteredPokes: pokemons}))
  }




  render() {
    console.log(this.state.pokemonData)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemonData={this.state.pokemonData} pokemonFlipHandler={this.pokemonFlipHandler}/>
      </Container>
    )
  }
}

export default PokemonPage
