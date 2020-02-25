import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
 
  state = {
    flipped: false
  }

  handleClick = (e) => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    let pokemonHP = this.props.pokemon.stats.find(stat => { return stat.name === "hp"})
    let pokemon = this.props.pokemon

    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.flipped ? pokemon.sprites.back : pokemon.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemonHP.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
