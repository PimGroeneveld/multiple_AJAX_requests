import React from "react";

//is props pre-defined or a batman?
const PokemonSelector = (props) => {

  function handleChange(event){
    props.onPokemonSelected(event.target.value)
  }

  const options = props.pokemons.map((pokemon, index) => {
    return <option key={index} value={index}>{pokemon.name}</option>
  })

  return (
    <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a pokemon!</option>
      {options}
    </select>
  )
}

export default PokemonSelector;
