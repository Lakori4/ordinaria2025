import { Character } from "../utils/types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";

export const handler: Handlers = {
  GET: async (_req, ctx: FreshContext<unknown, Character[]>) => {
    const json = await fetch("https://hp-api.onrender.com/api/characters");
    const response: Character[] = await json.json();
    return ctx.render(response);
  },
};

const Home = (props: PageProps) => {
  {console.log(props.data[0].name)}
  return <CharacterGrid chars={props.data} />;
};

export default Home;
