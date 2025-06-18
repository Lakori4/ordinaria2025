import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";


const CharacterCard:FunctionalComponent<{char: Character}> = (props) => {
    
    console.log(props.char.name)

    const starClick = (() => {

    })
    return (
        <div class="card">
            <a href={`/characters/${props.char.id}`}><img src={props.char.image ? props.char.image : "/no-image.jpg"} alt={props.char.name}/> </a>

            <div class="card-info">
                <a class="name" href={`/characters/${props.char.id}`}></a>
                <span class="star" onClick={starClick}>★</span>
            </div>
        </div>
    )   
}

export default CharacterCard