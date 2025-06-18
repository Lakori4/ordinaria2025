import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import { useEffect, useState } from "preact/hooks";


const CharacterCard:FunctionalComponent<{char: Character}> = (props) => {
    
    const [fav, setFav] = useState<string>("star")
    const [favCharacters, setFavs] = useState<Character[]>()

    useEffect(() => {
        const cookie = document.cookie.split("favorites=")[1].split(";")[0]
            if (cookie) {
                        if (JSON.parse((cookie)) as Character[]) {
                setFav("star fav")
            } else {
                setFav("star")
            }
        }

    }, [])

    useEffect(() => {
        if (fav !== "star fav") {
            document.cookie = `favorites=${(JSON.stringify(props.char))}; path=/;`
            console.log("cookie creada")
        } else if (fav === "star fav") {

            const date = new Date();
            date.setTime(date.getTime() - 60 * 1000)
            document.cookie = `favorites=${(JSON.stringify(props.char))}; expires${date.toUTCString()}; path=/;`
            console.log("cookie creada")
        }
    }, [fav])

    const starClick = () => {
        (fav === "star" ? setFav("star fav") : setFav("star"))
    }

    return (
        <div class="card">
            <a href={`/characters/${props.char.id}`}><img src={props.char.image ? props.char.image : "/no-image.jpg"} alt={props.char.name}/> </a>

            <div class="card-info">
                <a class="name" href={`/characters/${props.char.id}`}>{props.char.name}</a>
                <span class={fav} onClick={starClick}>★</span>
            </div>
        </div>
    )   
}

export default CharacterCard