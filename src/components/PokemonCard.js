import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      isFlipped: false
    }
  }


  flipHandler(e) {

    // console.log("hello")
    // console.log(this.state.isFlipped)
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }
render() {
  // console.log("pokemon Card", this.props)
  let { pokemon } = this.props
  let { name, sprites, stats } = pokemon
  // let hp = this.props.pokemon.stats[0].hp
// console.log(this.props.pokemon.stats[0].value)


  return (
    <Card>
      <div onClick={(e) => this.flipHandler()}>
        <div className="image">
          {this.state.isFlipped ? <img src={sprites.back} alt="oh no!" /> : <img src={sprites.front} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            POKEMON HP HERE hp
            </span>
        </div>
      </div>
    </Card>
  )
}
}
// add hp later 


export default PokemonCard
