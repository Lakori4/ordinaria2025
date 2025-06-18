import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";
import { useEffect, useState } from "preact/hooks";


const CharacterDetail:FunctionalComponent<{char: Character}> = (props) => {

    const [fav, setFav] = useState<string>("star")

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
            document.cookie = `favorites=${(JSON.stringify(props.char))}`
            console.log("cookie creada")
        }
    }, [fav])

    const starClick = () => {
        (fav === "star" ? setFav("star fav") : setFav("star"))
    }


    return(
        <div class="detail">
            <img src={props.char.image} alt={props.char.name}/>

            <h2>{props.char.name} <span onClick={starClick} class="star">★</span></h2>
            <p>Casa: {props.char.house}</p>
            {props.char.alive ? <p>Vivo</p>: <p>Muerto</p>}
            <a href="/" data-ancestor="true" aria-current="true">Volver</a>
        </div>
    )
}

export default CharacterDetail