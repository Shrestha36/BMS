import { useEffect, useState } from "react";
import Description from "./Description.js";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({
    isSelected: false,
    image: "",
    height: 0,
    weight: 0,
    name: "",
    type: "",
    baseExp: 0,
  });
  useEffect(() => {
    getAllPokemons();
  }, []);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    console.log(data);
    setAllPokemons(data?.results);
  };

  const handleClick = async (pokemon) => {
    const res = await fetch(pokemon?.url);
    const data = await res.json();
    console.log(data);
    setPokemon({
      isSelected: true,
      image: data?.sprites?.front_shiny,
      height: data?.height,
      weight: data?.weight,
      name: data?.name,
      type: data?.types[0]?.type?.name,
      baseExp: data?.base_experience,
    });
  };

  return (
    <div className="app-container">
      <h1>Pokemon List</h1>
      <div style={{display:'flex', flexDirection:'row', width:'100%' }}>
        <div style={{width:'50%'}}>
          {allPokemons.map((pokemon) => {
            return (
              <div onClick={() => handleClick(pokemon)}>{pokemon.name}</div>
            );
          })}
        </div>
        <div>{pokemon?.isSelected && <Description pokemon={pokemon} />}</div>
      </div>
    </div>
  );
}
export default App;
