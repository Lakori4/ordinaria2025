import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";
import { Character } from "../utils/types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Character[]>) => {
    const cookie = req.headers.get("Cookie")?.split(";").find((row) => row.startsWith("favorites="))?.split("=")[1];
    if (cookie) {
      const favChars = JSON.parse(decodeURIComponent(cookie)) as string[];

      const json = await fetch("https://hp-api.onrender.com/api/characters");
      const response: Character[] = await json.json();
      const chars = response.map(e => ({id: e.id, alive: e.alive, house: e.house, image: e.image, name: e.name}))
      return ctx.render(chars.filter((e => favChars.includes(e.id))));
      
    }
    return ctx.render();
  },
};

const Page = (props: PageProps) => {
  {console.log(props.data[0])}
  return <CharacterGrid chars={props.data} />;
};

export default Page;
