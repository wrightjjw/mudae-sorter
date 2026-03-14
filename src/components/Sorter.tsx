import { useState } from "react";
import ParseInput from "./ParseInput";

export default function Sorter() {
    const [chars, setChars] = useState([]);
    return (
        <>
            <ParseInput />
        </>
    );
}
