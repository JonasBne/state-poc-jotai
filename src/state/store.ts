import {atom} from "jotai";

// I store the current fetched page deliberately in state for the sake of the example but in real life scenarios
// I would argue this is not necessary, and I would co-locate this state closer to the component consuming it

const currentFetchedPageAtom = atom(1);
const currentPageAtom = atom('Planets');
const searchQueryAtom = atom('');

export const store = {
    currentFetchedPageAtom,
    currentPageAtom,
    searchQueryAtom
}