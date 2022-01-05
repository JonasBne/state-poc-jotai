import React from "react";

interface Navbar {
  setPage: (value: string) => void;
}

export default function Navbar({setPage}: Navbar) {
  return (
    <nav>
      <button onClick={() => setPage('Planets')}>Planets</button>
      <button onClick={() => setPage('Characters')}>Characters</button>
    </nav>
  )
}