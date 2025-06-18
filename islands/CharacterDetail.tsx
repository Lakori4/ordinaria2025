import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";


const CharacterDetail:FunctionalComponent<{char: Character}> = (props) => {



    return(
        <div class="detail">
            <img src={props.char.image} alt={props.char.name}/>

            <h2>{props.char.name} <span class="star">★</span></h2>
            <p>Casa: {props.char.house}</p>
            {props.char.alive ? <p>Vivo</p>: <p>Muerto</p>}
            <a href="/" data-ancestor="true" aria-current="true">Volver</a>
        </div>
    )
}

export default CharacterDetail