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

  handleSubmit = (submit) => {
    submit.preventDefault()
    let submitUrl = `http://localhost:3000/pokemon`
    // let { pokemon } = this.state
    // let { name, hp, frontUrl, backUrl } = pokemon
    let data = {
      name: this.state.name,
      stats: [
        {
          value: this.state.hp,
          name: 'hp'
        }
      ],
      sprites: {
        frontUrl: this.state.frontUrl,
        backUrl: this.state.backUrl
      }
    }



    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(submitUrl, config)
      .then(res => res.json())
      .then(newpokemon => this.props.renderNewPokemon(newpokemon))
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={e => this.handleFormChange(e)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={e => this.handleFormChange(e)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={e => this.handleFormChange(e)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={e => this.handleFormChange(e)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm


