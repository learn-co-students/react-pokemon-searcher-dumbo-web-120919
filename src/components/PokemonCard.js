import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: false
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    const {name, stats, sprites} = this.props.pokemon
    let HP = stats.find( s => s.name === "hp").value
    return (
      <Card onClick={this.handleToggle}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.toggle ? sprites.back : sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
            {HP}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
