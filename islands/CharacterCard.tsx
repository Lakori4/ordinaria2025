import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import { useEffect, useState } from "preact/hooks";


const CharacterCard:FunctionalComponent<{char: Character}> = (props) => {
    
    const [fav, setFav] = useState<boolean>(false)


    const starClick = () => {

        const storage: Character[] = []
        const cookie = document.cookie.split(";").find(row => row.startsWith("favorites="))?.split("=")[1]
        
        if (!fav) {
            if(!cookie) {
                storage.push(props.char)
            } else {
                storage.push(...(JSON.parse(cookie) as Character[]), props.char)
            }
        } else {
            if (cookie) {
                storage.push(...((JSON.parse(cookie) as Character[]).filter(e => e.id !== props.char.id)))
            }
        }
        const date = new Date()
        date.setTime(date.getTime() + 24* 60* 60* 1000)
        document.cookie = `favorites=${JSON.stringify(storage)}; path=/; expires=${date.toUTCString()};`
        setFav(!fav)
    }

    useEffect (() => {
        const cookie = document.cookie.split(";").find(row => row.startsWith("favorites="))?.split("=")[1]
        if (cookie) {
            setFav((JSON.parse(cookie) as Character[]).some(e => e.id === props.char.id))
            console.log((JSON.parse(cookie) as Character[]).some(e => e.id === props.char.id))
        }
    },[])

    return (
        <div class="card">
            <a href={`/characters/${props.char.id}`}><img src={props.char.image ? props.char.image : "/no-image.jpg"} alt={props.char.name}/> </a>
            <div class="card-info">
                <a class="name" href={`/characters/${props.char.id}`}>{props.char.name}</a>
                <span class={fav ? "star fav" : "star"} onClick={starClick}>★</span>
            </div>
        </div>
    )   
}

export default CharacterCard;