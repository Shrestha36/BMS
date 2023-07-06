import React from "react";
import { Fragment, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(100);
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  
  const refArr = useRef([]);
  useEffect(() => {
    console.log("API USEEFFECT");
    if (loading) {
      handlePokemonAPI();
    }
  }, [count, offset]);
  const handlePokemonAPI = () => {
    // setLoading(true)
    setTimeout(
      () =>
        fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=${offset}.`,
          {
            method: "get",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setPokemonList(res?.results);
            setLoading(false);
          }),
      2000
    );
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entries);
      console.log(entry?.isIntersecting);
      if (entry?.isIntersecting) {
        setCount((c) => c + 100);
        setLoading(true);
      }
    });
    if (!loading) {
      observer.observe(refArr?.current[refArr?.current.length - 1]);
    }
  }, [loading, refArr.current.length]);
  console.log(refArr);
  
  const renderList = () => {
    const filteredList = pokemonList?.filter((poke) =>
      poke?.name?.toLowerCase().includes(search.toLowerCase())
    );
    return filteredList.map((pokemon, index) => {
      // console.log('ref added to',filteredList.length,index + 1, pokemon.name)
      if (index + 1 === filteredList.length) {
        return (
          <div
            ref={(ref) => refArr.current.push(ref)}
            className="show"
            key={pokemon.name}
            onClick={() => handlePokemonClick(pokemon?.url, pokemon)}
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
        );
      }
      return (
        <div
          className="show"
          key={index}
          onClick={() => handlePokemonClick(pokemon?.url, pokemon)}
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
      );
    });
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  const handlePokemonClick = (url, pokemon) => {
    const regex = /\/pokemon\/(\d+)\//;
    const match = url.match(regex);
    const lastNumber = parseInt(match[1]);
    navigate(`/pokemon?id=${lastNumber}`);
  };
  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 10,
          backgroundColor: "black",
          color: "white",
        }}
      >
        {loading.toString()}
      </div>
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
  