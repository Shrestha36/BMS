import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const Card = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    height: 0,
    weight: 0,
    base_experience: 0,
    image: "",
    type: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setPokemon({
          name: res?.name,
          height: res?.height,
          weight: res?.weight,
          base_experience: res?.base_experience,
          image: res?.sprites?.front_default,
          type: res?.types[0]?.type?.name,
        });
      });
  },[id]);
  const getColorByType = (type) => {
    switch (type) {
      case "grass":
        return "#78C850";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "electric":
        return "#F8D030";
      case "poison":
        return "#A040A0";
      case "bug":
        return "#A8B820";
      case "normal":
        return "#A8A878";
      default:
        return "#A8A8A8";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: getColorByType(pokemon?.type),
          minHeight: "300px",
          minWidth: "200px",
          padding: "50px",
        }}
      >
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.image} alt={pokemon.name} />
        <h6>Height: {pokemon?.height}</h6>
        <h6>Weight: {pokemon?.weight}</h6>
        <h6>Base Experience: {pokemon?.base_experience}</h6>
        <button style={{cursor:'pointer'}} onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};