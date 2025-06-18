import { FunctionComponent } from "preact/src/index.d.ts";



const Header: FunctionComponent = () => {
    return (
        <div class="header">
            <a href="/">Todos</a>
            <a href="/favoritos">Favoritos</a>
        </div>
    )
}

export default Header