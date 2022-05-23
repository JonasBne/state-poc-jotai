import React from 'react';
import { Navbar } from './components/Navbar';
import {Planets} from './components/Planets';
import {Characters} from './components/Characters';
import { QueryClient, QueryClientProvider } from 'react-query';
import {store} from "./state/store";
import {useAtom} from "jotai";

const queryClient = new QueryClient();

// it could be argued whether app should be in charge of keeping track of the current fetched page
// advantage of Jotai is that we could easily move this logic inside the component itself
// which would remove the necessity of passing props down here
// however, for the sake of the example, let's ignore this for now

function App() {
  const { currentFetchedPageAtom, currentPageAtom } = store;

  const [currentFetchedPage, setCurrentFetchedPage ] = useAtom(currentFetchedPageAtom);
  const [ currentPage, setCurrentPage ] = useAtom(currentPageAtom);

  const handleNavItemClick = (page: string) => {
    setCurrentPage(page)
  }

  const handleFetchNextClick = () => {
    setCurrentFetchedPage((prevPageNumber) => prevPageNumber + 1)
  }

  const handleFetchPreviousClick = () => {
    setCurrentFetchedPage((prevPageNumber) => prevPageNumber - 1)
  }

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Star Wars Information</h1>
      <Navbar onPageClick={handleNavItemClick} />
      <div className="content">
        {currentPage === 'Planets' && <Planets currentFetchedPage={currentFetchedPage} onFetchNext={handleFetchNextClick} onFetchPrevious={handleFetchPreviousClick} />}
        {currentPage === 'Characters' && <Characters />}
      </div>
    </div>
    </QueryClientProvider>
    </>
  );
}

export default App;
