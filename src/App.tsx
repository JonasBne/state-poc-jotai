import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import Characters from './components/Characters';

function App() {
  const [page, setPage] = useState<string>('Planets');

  return (
    <div className="App">
      <h1>Star Wars Information</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'Planets' && <Planets />}
        {page === 'Characters' && <Characters />}
      </div>
    </div>
  );
}

export default App;
