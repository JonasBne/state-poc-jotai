import {Character} from "./Character";
import {useQueryCharacters} from "../api/hooks/useQueryCharacters";
import {useAtom} from "jotai";
import {store} from "../state/store";

export const Characters = () => {
  const { searchQueryAtom } = store;

  // consumes the client state but is not responsible for keeping it up-to-date
  const [ searchQuery ] = useAtom(searchQueryAtom);

  const { data, status } = useQueryCharacters(searchQuery);

  return (
    <div data-cy="characters-content">
      <h2 data-cy="characters-heading">Characters</h2>
      {status === 'loading' && <p data-cy="characters-loading">Loading...</p>}
      {status === 'error' && <p data-cy="characters-error-msg">Something went wrong while fetching the data...</p>}
      {status === 'success' && data.map((character: any) => <Character key={character.url} name={character.name} height={character.height} mass={character.mass} />)}
    </div>
  )
}
