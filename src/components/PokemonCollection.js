import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  arrayOfPokemonCards = (pokemonData) => {
    let pokeData = this.props.pokemonData
    let cardarray = pokeData.map(pokemon => {
      return <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        pokemonFlipHandler={this.props.pokemonFlipHandler}
      />
    })
    return cardarray
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.arrayOfPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
