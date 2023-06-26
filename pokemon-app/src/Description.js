import React from "react";

const Description = ({ pokemon }) => {
  return (
    <div className="desc">
      <p>
        <h1>{pokemon?.name}</h1>
      </p>
      <img src={pokemon?.image}></img>
      <p>
        <b>Weight</b>: <b>{pokemon?.weight}</b>
      </p>
      <p>
        <b>Height</b>: <b>{pokemon?.height}</b>
      </p>
      <p>
        <b>Base Experience</b>: <b>{pokemon?.baseExp}</b>
      </p>
    </div>
  );
};

export default Description;
