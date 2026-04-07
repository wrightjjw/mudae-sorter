import { useState } from "react";
import ParseInput from "./ParseInput";
import type Character from "../types/character";
import CharacterCard from "./CharacterCard";

export default function Sorter() {
    const [chars, setChars] = useState<Character[]>([]);

    return (
        <>
            <ParseInput setChars={setChars} />
            <ul>
                {chars.map(char => (
                    <CharacterCard character={char} />
                ))}
            </ul>
        </>
    );
}
