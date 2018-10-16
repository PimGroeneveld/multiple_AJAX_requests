import React from "react";

const PokemonDetail = (props) => {
  if(!props.pokemon) return <p>Choose a Pokemon to see its information.</p>;
  console.log(props);
  const moves = props.moves.map(move => {
    return (<li value={move.ability.name}>{move.ability.name}</li>)
  })

  console.log("moves", moves);
  return (
    <div>
      <h3>
        {props.pokemon.name}
      </h3>
      <h3>
        {moves}
      </h3>
    </div>
  )
}

export default PokemonDetail;
