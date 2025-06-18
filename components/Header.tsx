import { FunctionComponent } from "preact/src/index.d.ts";



const Header: FunctionComponent = () => {
    return (
        <div class="header">
            <a href="/">Todos</a>
            <a href="/favorites">Favoritos</a>
        </div>
    )
}

export default Header