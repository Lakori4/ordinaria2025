import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import { useEffect, useState } from "preact/hooks";


const CharacterCard:FunctionalComponent<{char: Character}> = (props) => {
    
    const [fav, setFav] = useState<boolean>(false)


    const starClick = () => {

        const storage: string[] = []
        const cookie = document.cookie.split(";").find(row => row.startsWith("favorites="))?.split("=")[1]
        
        if (!fav) {
            if(!cookie) {
                storage.push(props.char.id)
            } else {
                storage.push(...(JSON.parse(decodeURIComponent(cookie)) as string[]), props.char.id)
            }
        } else {
            if (cookie) {
                storage.push(...((JSON.parse(decodeURIComponent(cookie)) as string[]).filter(e => e !== props.char.id)))
            }
        }
        const date = new Date()
        date.setTime(date.getTime() + 24* 60* 60* 1000)
        document.cookie = `favorites=${encodeURIComponent(JSON.stringify(storage))}; path=/; expires=${date.toUTCString()};`
        setFav(!fav)
    }

    useEffect (() => {
        const cookie = document.cookie.split(";").find(row => row.startsWith("favorites="))?.split("=")[1]
        if (cookie) {
            setFav((JSON.parse(decodeURIComponent(cookie)) as string[]).some(e => e === props.char.id))
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