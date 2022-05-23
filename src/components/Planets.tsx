import {Planet} from "./Planet";
import {useGetPlanets} from "../api/hooks/useGetPlanets";

interface PlanetsProps {
    currentFetchedPage: number
    onFetchNext: () => void;
    onFetchPrevious: () => void;
}

export const Planets = ({ currentFetchedPage, onFetchNext, onFetchPrevious }: PlanetsProps) => {
    const { data, status } = useGetPlanets(currentFetchedPage)

    return (
        <div>
            <h2>Planets</h2>
            {currentFetchedPage > 1 && <button onClick={onFetchPrevious}>Previous page</button>}
            <button onClick={onFetchNext}>Next page</button>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Something went wrong while fetching the data...</p>}
            {status === 'success' && data.map((planet: any) =>
                <Planet key={planet.url}
                        name={planet.name}
                        population={planet.population}
                        terrain={planet.terrain}/>
            )}
        </div>
    );
}
