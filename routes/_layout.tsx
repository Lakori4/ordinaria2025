import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return(
    <div>
        <Header/>
        <Component/>
    </div>
  )
}

export default Layout