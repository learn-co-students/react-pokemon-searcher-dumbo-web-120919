import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokes: [],
    displayPokes: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokes => {
      this.setState({
        pokes,
        displayPokes: pokes
      })
    })
  }

  handleSearch = (e) => {
    let searchTerm = (e.target.value).toLowerCase()
    let updatedPokes = this.state.pokes.filter(poke => poke.name.includes(searchTerm))

    this.setState({
      displayPokes: updatedPokes,
      searchTerm
    })

  }

  // update backend data by passing in the newly submitted Poke Object
  handleFormSubmit = (newPoke) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke)
    }

    fetch("http://localhost:3000/pokemon", config)
    .then(r => r.json())
    .then(newPoke => {
      console.log(newPoke)
      this.setState({
        pokes: [newPoke, ...this.state.pokes],
        displayPokes: [newPoke, ...this.state.displayPokes]
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormSubmit={this.handleFormSubmit}/>
        <br />
        <Search onChange={(e) => this.handleSearch(e)} />
        <br />
        <PokemonCollection pokes={this.state.displayPokes} />
      </Container>
    )
  }
}

export default PokemonPage
