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
    // console.log(this.props.pokemon)

    let pokemon = this.props.pokemon

    let { name, sprites, stats } = pokemon
    
    let { front, back} = sprites

    let foundHpObject = stats.find(statObj => {return statObj.name === "hp"})
      
    console.log(foundHpObject.value)

  // console.log(front)

    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            <img alt="oh no!" src={ this.state.flipped ? back : front } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {foundHpObject.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
