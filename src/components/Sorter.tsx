import { useState } from "react";
import ParseInput from "./ParseInput";
import type Character from "../types/character";

export default function Sorter() {
    const [chars, setChars] = useState<Character[]>([]);

    return (
        <>
            <ParseInput setChars={setChars} />
            <ul>
                {chars.map(char => (
                    <ol>{char.charName} - {char.seriesName}</ol>
                ))}
            </ul>
        </>
    );
}
