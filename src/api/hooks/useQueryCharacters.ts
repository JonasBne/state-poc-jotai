import {useQuery} from "react-query";
import {getCharacters} from "../characters.api";

// please note that for this POC it's not really necessary to wrap your query calls in a custom hook
// in real life scenarios you often want to implement some additional logic such as nullish coalescing or some sorts
// and in those scenarios a hook comes in handy
// alternatively you could just useQuery inside your components directly

const characterKeys = {
    all: [ 'characters' ],
}

export const useQueryCharacters = (searchQuery?: string) => {

    const { error, data, isError, isLoading, status } = useQuery({
        queryKey: characterKeys.all,
        queryFn: getCharacters,
        keepPreviousData: true,
        // @ts-ignore
        select: (data) =>  searchQuery ? data.results.filter(character => character.name === searchQuery) : data.results
    })



    return {
        error,
        data,
        isError,
        isLoading,
        status
    }
}