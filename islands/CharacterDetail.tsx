import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import { useEffect, useState } from "preact/hooks";


const CharacterDetail:FunctionalComponent<{char: Character}> = (props) => {

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
            setFav((JSON.parse(cookie) as string[]).some(e => e === props.char.id))
            console.log((JSON.parse(cookie) as string[]).some(e => e === props.char.id))
        }
    },[])


    return(
        <div class="detail">
            <img src={props.char.image} alt={props.char.name}/>

            <h2>{props.char.name} <span onClick={starClick} class={fav ? "star fav" : "star"}>★</span></h2>
            <p>Casa: {props.char.house}</p>
            {props.char.alive ? <p>Vivo</p>: <p>Muerto</p>}
            <a href="/" data-ancestor="true" aria-current="true">Volver</a>
        </div>
    )
}

export default CharacterDetail