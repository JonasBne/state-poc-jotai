import React from "react";

interface Planet {
  name: string,
  terrain: string,
  population: string,
}

export default function Planet({name, terrain, population}: Planet) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
    </div>
  )
}