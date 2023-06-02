import {Planet} from "./Planet";
import {useQueryPlanets} from "../api/hooks/useQueryPlanets";

interface PlanetsProps {
    currentFetchedPage: number
    onFetchNext: () => void;
    onFetchPrevious: () => void;
}

export const Planets = ({ currentFetchedPage, onFetchNext, onFetchPrevious }: PlanetsProps) => {
    const { data, status } = useQueryPlanets(currentFetchedPage)

    return (
        <div data-cy="planets-content">
            <h2 data-cy="planets-heading">Planets</h2>
            {currentFetchedPage > 1 && <button data-cy="planets-fetch-previous-btn" onClick={onFetchPrevious}>Previous page</button>}
            <button data-cy="planets-fetch-next-btn" onClick={onFetchNext}>Next page</button>

            {status === 'loading' && <p data-cy="planets-loading">Loading...</p>}
            {status === 'error' && <p data-cy="planets-error-msg">Something went wrong while fetching the data...</p>}
            {status === 'success' && data.map((planet: any) =>
                <Planet key={planet.url}
                        name={planet.name}
                        population={planet.population}
                        terrain={planet.terrain}/>
            )}
        </div>
    );
}
