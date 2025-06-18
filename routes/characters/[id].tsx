import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../../utils/types.ts";


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Character>) => {
        const { id } = ctx.params

        const json = await fetch("https://hp-api.onrender.com/api/character/" + id);
        const response:Character = await json.json()
        return ctx.render(response)
    }
}

const Page = (props: PageProps) => {

    return(
        <p>{props.data.name}</p>
    )
}

export default Page;