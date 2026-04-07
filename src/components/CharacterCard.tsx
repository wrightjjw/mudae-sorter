import type Character from "../types/character";

export default function Sorter({ character }: { character: Character }) {

    return (
        <div>
            <img src={character.imageUrl} />
        </div>
    )
}
