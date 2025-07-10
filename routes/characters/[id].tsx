import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterDetail from "../../components/CharacterDetail.tsx";
import { Character } from "../../utils/types.ts";


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Character[]>) => {
        const { id } = ctx.params

        const json = await fetch("https://hp-api.onrender.com/api/character/" + id);
        const response:Character[] = await json.json()
        return ctx.render(response.map(e => ({id: e.id, name: e.name, image: e.image, house: e.house, alive: e.alive})))
    }
}

const Page = (props: PageProps) => {

    return(
        <CharacterDetail char={props.data[0]}/>
    )
}

export default Page;