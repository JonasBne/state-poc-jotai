import axios from "axios";

// this async function could also be written with fetch API
// axios throws an error if a request fails, fetch does not by itself so you have to make sure to use
// a try catch block to throw an error yourself (otherwise React Query) won't function properly

export const getPlanets = async (pageNumber: number) => {
    const { data } =  await axios.get(`https://swapi.dev/api/planets/?page=${pageNumber}`);
    return data;
}