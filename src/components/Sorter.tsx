import { useState } from "react";
import ParseInput from "./ParseInput";
import type Character from "../types/character";

export default function Sorter() {
    const [chars, setChars] = useState<Character[]>([]);

    return (
        <>
            <ParseInput setChars={setChars} />
            <div className="card-list">
                {chars.map(char => (
                    <ol>{char.charName} - {char.seriesName}</ol>
                ))}
            </div>
        </>
    );
}
