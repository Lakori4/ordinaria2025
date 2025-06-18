import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";
import { Character } from "../utils/types.ts";


export const handler: Handlers = {
    GET: (req:Request, ctx: FreshContext<unknown, Character[]>) => {
        const cookie = req.headers.get("Cookie")
        if(cookie) {
            return ctx.render(JSON.parse(cookie) as Character[])
        }
            

        return (ctx.render())
    }
} 


const Page = (props: PageProps) => {
    <CharacterGrid chars={props.data}/>
}

export default Page