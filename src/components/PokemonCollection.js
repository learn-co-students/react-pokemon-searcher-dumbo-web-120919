import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  createPokemonCards = () => {
    return this.props.pokemon.map( pokemon => {
      return <PokemonCard key={pokemon.id} thisPokemon={pokemon} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.createPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
