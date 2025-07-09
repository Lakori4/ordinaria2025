import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterGrid from "../components/CharacterGrid.tsx";
import { Character } from "../utils/types.ts";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Character[]>) => {
    const cookie = req.headers
      .get("Cookie")
      ?.split(";")
      .find((row) => row.startsWith("favorites="))
      ?.split("=")[1];
    if (cookie) {
      const favChars = JSON.parse(cookie) as Character[];
      return ctx.render(favChars);
    }
    return ctx.render();
  },
};

const Page = (props: PageProps) => {
  {console.log(props.data[0].name)}
  return <CharacterGrid chars={props.data} />;
};

export default Page;
