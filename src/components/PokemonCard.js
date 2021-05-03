import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super()
    this.state = {
      sprite: props.pokemon.sprites.front
      
    }
  }
  
  handleClick = (sprite) => {
    const front = this.props.pokemon.sprites.front
    const back = this.props.pokemon.sprites.back
    console.log(this.front)
    sprite === front ? this.setState({sprite: back}) : this.setState({sprite: front})
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.handleClick(this.state.sprite)}>
            <img alt="oh no!" src={this.state.sprite} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
