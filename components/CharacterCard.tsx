import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import Star from "../islands/Star.tsx";


const CharacterCard:FunctionalComponent<{char: Character}> = (props) => {
    
    

    return (
        <div class="card">
            <a href={`/characters/${props.char.id}`}><img src={props.char.image ? props.char.image : "/no-image.jpg"} alt={props.char.name}/> </a>
            <div class="card-info">
                <a class="name" href={`/characters/${props.char.id}`}>{props.char.name}</a>
                <Star id={props.char.id}/>
            </div>
        </div>
    )   
}

export default CharacterCard;