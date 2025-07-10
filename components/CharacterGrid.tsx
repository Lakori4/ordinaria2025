import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import CharacterCard from "../islands/CharacterCard.tsx";


const CharacterGrid: FunctionalComponent<{chars: Character[]}> = (chars) => {
    return (
        <div class="grid">
            {chars.chars.map(c => <CharacterCard char={c} key={c.id}/>)}
        </div>
    )
}

export default CharacterGrid