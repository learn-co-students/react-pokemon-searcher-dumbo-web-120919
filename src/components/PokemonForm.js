import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleFormChange = (e) => {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value })
        break;
      case "hp":
        this.setState({ hp: e.target.value })
        break;
      case "frontUrl":
        this.setState({ frontUrl: e.target.value })
        break;
      case "backUrl":
        this.setState({ backUrl: e.target.value })
        break;
      default:
        return "nope"
    }
  }

  handleInitialSubmit = (event) => {
    event.preventDefault()
    let newPokemonObj = {
      name: this.state.name,
      stats: [{
        "value": this.state.hp,
        "name": "hp"
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.props.handleFormSubmit(newPokemonObj)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleInitialSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleFormChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleFormChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleFormChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleFormChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
