import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {

    let thisPokemon = this.props.thisPokemon;
    
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img
              src={
              (this.state.clicked ? 
              thisPokemon.sprites.back :
              thisPokemon.sprites.front)}
              alt="oh no!" 
            />
          </div>
          <div className="content">
            <div className="header">{thisPokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {thisPokemon.stats[thisPokemon.stats.findIndex(stat => stat.name === "hp")].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
