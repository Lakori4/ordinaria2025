import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";


const CharacterCard:FunctionalComponent<{char: Character}> = (props) => {
    
    return (
        <div class="card">
            <img src={props.char.image ? props.char.image : "/no-image.jpg"} alt={props.char.name} />

        </div>
    )   
}

export default CharacterCard