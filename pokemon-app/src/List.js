import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [count, setCount] = useState(10);
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setPokemonList(res?.results);
      });
  }, [count]);

  const renderList = () => {
    const searchedPokemonList = pokemonList?.filter((poke) =>
      poke?.name?.toLowerCase().includes(search.toLowerCase())
    );

    if (searchedPokemonList?.length === 0) {
      return <div>Result not found</div>;
    }

    return (
      <Fragment>
        {searchedPokemonList?.map((pokemon, index) => (
          <div
            key={index}
            onClick={() => handlePokemonClick(pokemon?.url)}
            style={{
              cursor: "pointer",
              backgroundColor: "lightgrey",
              width: "20%",
              marginBottom: "5px",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            {pokemon.name}
          </div>
        ))}
      </Fragment>
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handlePokemonClick = (url) => {
    const regex = /\/pokemon\/(\d+)\//;
    const match = url.match(regex);
    const lastNumber = parseInt(match[1]);
    navigate(`/pokemon?id=${lastNumber}`);
  };

  return (
    <Fragment>
      <div style={{ padding: "10px" }}>
        <h1>Pokemon List</h1>
      </div>
      <div style={{ padding: "10px" }}>
        <span>How many pokemons are too many pokemons?</span>
        <span style={{ paddingLeft: "7px" }}>
          <input value={count} onChange={handleCountChange} type="text" />
        </span>
      </div>
      <div style={{ padding: "10px" }}>
        <span>search for pokemons</span>
        <span style={{ paddingLeft: "7px" }}>
          <input value={search} onChange={handleSearch} type="text" />
        </span>
      </div>
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "50%" }}>{renderList()}</div>
      </div>
    </Fragment>
  );
};

export default List;
