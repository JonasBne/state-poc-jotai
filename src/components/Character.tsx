import React from "react";

interface Character {
  name: string,
  height: string,
  mass: string,
}

export default function Character({name, height, mass}: Character) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </div>
  )
}