import { useQuery } from "react-query";
import axios from "axios";
import Planet from "./Planet";
import { useState } from "react";


function Planets() {
  const [page, setPage] = useState<number>(1);

  async function fetchPlanets(page: number) {
    try {
      const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
      console.log(res.data)
      return res.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const {data, status} = useQuery(['planets', page], () => fetchPlanets(page));

  return (
    <div>
      <h2>Planets</h2>
      {page > 1 && <button onClick={() => setPage(prevPage => prevPage - 1)}>Previous page</button>}
      <button onClick={() => setPage(prevPage => prevPage + 1)}>Next page</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Something went wrong while fetching the data...</p>}
      {status === 'success' && data.results.map((planet: any) => <Planet key={planet.url} name={planet.name} population={planet.population} terrain={planet.terrain} />)}
    </div>
  )
}

export default Planets;