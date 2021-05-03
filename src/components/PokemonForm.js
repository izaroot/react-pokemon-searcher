import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state={
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  handleChange = ({target}) => {
    // console.log(event)
    // console.log(event.target.hp.value)
    // console.log(event.target.frontUrl.value)
    console.log(target)
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newPokemon = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(newPokeObj => {
        this.props.createPokemon(newPokeObj)
        this.setState({
          name: "",
          hp: "",
          frontUrl: "",
          backUrl: ""
        })
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onChange={(e) => this.handleChange(e)} onSubmit={(event) => {this.handleSubmit(event)}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
