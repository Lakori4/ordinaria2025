import { Character } from "../utils/types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";

export const handler: Handlers = {
  GET: async (_req, ctx: FreshContext<unknown, Character[]>) => {
    const json = await fetch("https://hp-api.onrender.com/api/characters");
    const response: Character[] = await json.json();
    const chars = response.map(e => ({id: e.id, alive: e.alive, house: e.house, image: e.image, name: e.name}))
    return ctx.render(chars);
  },
};

const Home = (props: PageProps) => {
  {console.log(props.data[0])}
  return <CharacterGrid chars={props.data} />;
};

export default Home;
