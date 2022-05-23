import React from "react";
import {store} from "../state/store";
import {useAtom} from "jotai";

interface NavbarProps {
  onPageClick: (page: string) => void;
}

export const Navbar = ({ onPageClick }: NavbarProps) => {
    const { searchQueryAtom } = store;
    const [, setSearchQuery ] = useAtom(searchQueryAtom)

    const handleSearchInput = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        // @ts-ignore
        setSearchQuery(ev.target.value)
    }

    return (
        <nav>
            <button onClick={() => onPageClick('Planets')}>Planets</button>
            <button onClick={() => onPageClick('Characters')}>Characters</button>
            <input type="text" id="characterInput" onKeyUp={(ev) => handleSearchInput(ev)} placeholder="Enter character name" title="Type in a name"/>
        </nav>
    );
}
