import type Character from "../types/character";

export default function CharacterCard({ character }: { character: Character }) {

    return (
        <div className="card">
            <img src={character.imageUrl} referrerPolicy="no-referrer" />
        </div>
    )
}
