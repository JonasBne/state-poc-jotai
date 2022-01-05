import { useQuery } from "react-query";
import axios from "axios";
import Character from "./Character";

function Characters() {

  async function fetchCharacters() {
    try {
      const res = await axios.get('https://swapi.dev/api/people');
      return res.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const {data, status} = useQuery('planets', fetchCharacters);

  return (
    <div>
      <h2>Characters</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Something went wrong while fetching the data...</p>}
      {status === 'success' && data.results.map((character: any) => <Character key={character.url} name={character.name} height={character.height} mass={character.mass} />)}
    </div>
  )
}

export default Characters;