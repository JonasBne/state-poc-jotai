import {useQuery} from "react-query";
import {getPlanets} from "../planets.api";

// please note that for this POC it's not really necessary to wrap your query calls in a custom hook
// in real life scenarios you often want to implement some additional logic such as nullish coalescing or some sorts
// and in those scenarios a hook comes in handy
// alternatively you could just useQuery inside your components directly

const planetKeys = {
    all: [ 'planets' ],
    detail: (pageNumber: number) => [...planetKeys.all, {pageNumber}]
}

export const useQueryPlanets = (pageNumber: number) => {
    const { error, data, isError, isLoading, status } = useQuery({
        queryKey: planetKeys.detail(pageNumber),
        queryFn: () => getPlanets(pageNumber),
        keepPreviousData: true,
        select: (data) => data.results
    })

    return {
        error,
        data,
        isError,
        isLoading,
        status
    }
}