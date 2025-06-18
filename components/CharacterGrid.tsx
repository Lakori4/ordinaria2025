import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import CharacterCard from "../islands/CharacterCard.tsx";



const CharacterGrid: FunctionalComponent<{chars: Character[]}> = (props) => {

    console.log(props.chars[0].name)
    return (
        <div class="grid">
            {props.chars.map(c => {<CharacterCard char={c}/>})}
        </div>
    )
}

export default CharacterGrid