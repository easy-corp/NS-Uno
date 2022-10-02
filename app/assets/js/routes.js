import HomePage from "../../views/HomePage"
import ServidoresPage from "../../views/ServidoresPage"
import CadastroPage from "../../views/CadastroPage"
import PerfilPage from "../../views/PerfilPage"

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
    "/perfil": {
        component: PerfilPage,
    },
}