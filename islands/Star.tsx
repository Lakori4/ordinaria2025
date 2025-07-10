import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../utils/types.ts";



const Star: FunctionalComponent<{id: string}> = (props) => {
    const [fav, setFav] = useState<boolean>(false)


    const starClick = () => {

        const storage: string[] = []
        const cookie = document.cookie.split(";").find(row => row.startsWith("favorites="))?.split("=")[1]
        
        if (!fav) {
            if(!cookie) {
                storage.push(props.id)
            } else {
                storage.push(...(JSON.parse(decodeURIComponent(cookie)) as string[]), props.id)
            }
        } else {
            if (cookie) {
                storage.push(...((JSON.parse(decodeURIComponent(cookie)) as string[]).filter(e => e !== props.id)))
            }
        }
        const date = new Date()
        date.setTime(date.getTime() + 24* 60* 60* 1000)
        document.cookie = `favorites=${encodeURIComponent(JSON.stringify(storage))}; path=/; expires=${date.toUTCString()};`
        setFav(!fav)
        console.log(fav)
    }

    useEffect (() => {
        const cookie = document.cookie.split(";").find(row => row.startsWith("favorites="))?.split("=")[1]
        if (cookie) {
            setFav((JSON.parse(decodeURIComponent(cookie)) as string[]).some(e => e === props.id))
        }
    },[])

    return (
        <span onClick={starClick} class={fav ? "star fav" : "star"}>★</span>
    )
}

export default Star;