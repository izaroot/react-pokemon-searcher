import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    searchText: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemonArr => {
        this.setState({
          pokemons: pokemonArr
        })
    })
  }

  handleChange = ({target: { value }}) => {
    this.setState({
      searchText: value
    })
  }

 createPokemon = (newPoke) => {
  this.setState({
    pokemons: [newPoke, ...this.state.pokemons]
  })
 }

  render() {

    const filteredMons = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchText))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
        <br />
        <Search handleChange={this.handleChange} />
        <br />
        <PokemonCollection pokemons={filteredMons} />
      </Container>
    )
  }
}

export default PokemonPage
