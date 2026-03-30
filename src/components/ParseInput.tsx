import { Parser } from "../parser";
import type Character from "../types/character";

export default function ParseInput({ setChars }: { setChars: (chars: Character[]) => void; }) {

    function formImport(formData: FormData) {
        const input = formData.get("parseInput")?.valueOf() as string;
        if (!input) {
            throw "no parseInput value provided!"
        }

        setChars(Parser.parseSeriesImages(input));
    }

    return (
        <form action={formImport}>
            <textarea name="parseInput" required />
            <button type="submit">Import</button>
        </form>
    )
}
