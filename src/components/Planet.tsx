import React from "react";

interface PlanetProps {
  name: string,
  terrain: string,
  population: string,
}

export const Planet = ({ name, terrain, population }: PlanetProps) => (
    <div data-cy="planet" className="card">
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
    </div>
  )