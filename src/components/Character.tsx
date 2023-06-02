interface CharacterProps {
  name: string,
  height: string,
  mass: string,
}

export const Character = ({name, height, mass}: CharacterProps) => {
  return (
    <div data-cy="character" className="card">
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </div>
  )
}