import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';

class PokemonContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null,
      currentPokemonMoves: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    this.handlePokemonInfoAfterSelect = this.handlePokemonInfoAfterSelect.bind(this);
  }

  //componentDidMount
  componentDidMount(){
    const url = "http://pokeapi.co/api/v2/pokemon/"
    fetch(url).then((res) => res.json())
    .then((pokemons) => {
      this.setState({pokemons: pokemons.results});
    })

  }
  //handlePokemonSelected
  handlePokemonSelected(index){ //get this index from pokemonselector
    const pokemon = this.state.pokemons[index];

    fetch(pokemon.url)
    .then((res) => res.json())
    .then(pokeData => this.setState({
      currentPokemon: pokemon,
      currentPokemonMoves: pokeData.abilities
    }))
   //sets currentPokemon to the selected pokemon index
  }

  handlePokemonInfoAfterSelect(){
    const pokemonURL = this.state.currentPokemon.url;
  }

  render(){
    return(
      <center>
        <div>
          <h2>List of all Pokemon</h2>
          <PokemonSelector pokemons = {this.state.pokemons} onPokemonSelected = {this.handlePokemonSelected} handlePokemonInfo={this.handlePokemonInfoAfterSelect}/>
          <PokemonDetail pokemon={this.state.currentPokemon} moves={this.state.currentPokemonMoves}/>
        </div>
    </center>
    );
  }

}

export default PokemonContainer;
