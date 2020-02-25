import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imgClicked: false
  }
  
  
  handleImgFlip = (e) => {
    this.setState({
      imgClicked: !this.state.imgClicked
    })
  }
        
  render() {
          
    const { poke } = this.props
    const pokeHP = poke.stats.filter(stat => stat.name === "hp")
    // const pokeHPObj = poke.stats.find(stat => stat.name === "hp")
    // console.log(pokeHP)
    return (
      <Card onClick={this.handleImgFlip}>
        <div>
          <div className="image">
            <img src={this.state.imgClicked ? poke.sprites.back : poke.sprites.front} 
                 alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokeHP[0].value} hp
              
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
