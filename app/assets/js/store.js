let store = {
    usuarios: [
        {
            id: 1,
            login: "admin",
            senha: "1234"
        },
        {
            id: 2,
            login: "luis",
            senha: "qwerty"
        },
    ],

    autenticar(usuario) {
        let user = store.usuarios.find (
            u => u.login === usuario.login &&
                 u.senha === usuario.senha
        );

        if (user) {
            return true;
        } else {
            return false;
        }
    },

    cadastrar(usuario) {
        let user = store.usuarios.find(
            u => u.login === usuario.login
        );

        if (user) {
            return false;
        } else {
            let ids = store.usuarios.map(u => u.id);
            let newId = Math.max(...ids) + 1;

            usuario.id = newId;

            store.usuarios.push(usuario);

            return true
        }
    }
}

export default store;