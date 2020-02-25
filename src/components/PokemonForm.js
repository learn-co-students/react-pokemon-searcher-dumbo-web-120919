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

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // prevent form from refreshing!!!
    e.preventDefault()

    // make the submitted form the same format as JSON's format
    const newPokeObj = {
      name: this.state.name,
      stats: [{
        name: 'hp',
        value: Number(this.state.hp)
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    // pass the submitted form with CORRECT format onto parent component
    this.props.handleFormSubmit(newPokeObj)

    // clear the form input fields
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
