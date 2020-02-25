import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    
    let newArray = this.props.pokemonArray.map((pokObj) => {
      return <PokemonCard key={pokObj.name} pokemon={pokObj} />
    })

    return (
      <Card.Group itemsPerRow={6}>
        {newArray}
      </Card.Group>
    )
  }
}

export default PokemonCollection
