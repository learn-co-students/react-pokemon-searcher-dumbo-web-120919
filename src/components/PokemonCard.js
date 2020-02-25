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
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }

  addDefaultsrc = (e) => {
    // e.target.src = 'https://cdn.drawception.com/images/panels/2012/4-10/dA8hcYZmdc-2.png'
  }

  render() {
    // console.log("pokemon Card", this.props)
    let { pokemon } = this.props
    let { name, sprites, stats } = pokemon
    let { front, back } = sprites
    let foundHPObject = stats.find(statObj => { return statObj.name === "hp" })

    return (
      <Card>
        <div onClick={(e) => this.flipHandler()}>
        {this.state.isFlipped ? <p>Back</p> : <p>Front</p>  }
          <div className="image">
            <img src={this.state.isFlipped ? back : front} onError={this.addDefaultsrc} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {foundHPObject.value}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}
// add hp later 


export default PokemonCard
