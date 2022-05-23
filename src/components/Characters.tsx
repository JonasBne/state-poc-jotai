import Character from "./Character";
import {useGetCharacters} from "../api/hooks/useGetCharacters";
import {useAtom} from "jotai";
import {store} from "../state/store";

export const Characters = () => {
  const { searchQueryAtom } = store;

  // consumes the client state but is not responsible for keeping it up-to-date
  const [ searchQuery ] = useAtom(searchQueryAtom);

  const { data, status } = useGetCharacters(searchQuery);

  console.log('data is', data)

  return (
    <div>
      <h2>Characters</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Something went wrong while fetching the data...</p>}
      {status === 'success' && data.map((character: any) => <Character key={character.url} name={character.name} height={character.height} mass={character.mass} />)}
    </div>
  )
}
