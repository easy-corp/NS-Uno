import HomePage from "../../views/HomePage"
import ServidoresPage from "../../views/ServidoresPage"
import CadastroPage from "../../views/CadastroPage"

export const routes = {
    "/home": {
        component: HomePage,
    },
    "/servidores": {
        component: ServidoresPage,
    },
    "/cadastro": {
        component: CadastroPage,
    },
}