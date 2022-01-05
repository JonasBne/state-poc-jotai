import { useQuery } from "react-query";
import axios from "axios";
import Planet from "./Planet";


function Planets() {

  async function fetchPlanets() {
    try {
      const res = await axios.get('https://swapi.dev/api/planets');
      return res.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const {data, status} = useQuery('planets', fetchPlanets);
  console.log(status)



  return (
    <div>
      <h2>Planets</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Something went wrong while fetching the data...</p>}
      {status === 'success' && data.results.map((planet: any) => <Planet key={planet.url} name={planet.name} population={planet.population} terrain={planet.terrain} />)}
    </div>
  )
}

export default Planets;