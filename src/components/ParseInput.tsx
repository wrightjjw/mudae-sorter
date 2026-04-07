import { Parser } from "../parser";
import type Character from "../types/character";

export default function ParseInput({ setChars }: { setChars: (chars: Character[]) => void; }) {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const input = formData.get("parseInput")?.valueOf() as string;
        if (!input) {
            throw "no parseInput value provided!"
        }

        setChars(Parser.parseSeriesImages(input));
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea name="parseInput" required />
            <button type="submit">Import</button>
        </form>
    )
}
