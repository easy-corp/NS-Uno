<template>
    <Page class="app">
        <HeaderCadastro />

        <stackLayout class="layoutCadastro">
            <TextField v-model="usuario.login" class="textField" hint="Nome" editable="true" /> 
            <TextField v-model="usuario.senha" class="textField" hint="Senha" editable="true" secure="true" /> 
            <TextField v-model="confSenha" class="textField" hint="Confirme a Senha" editable="true" secure="true" /> 
            
            <Button class="btnCadastrar" text="Cadastrar" @tap="cadastrarUser" />
        </StackLayout>
    </Page>
</template>
<style scoped lang="scss">
    .app {
        background-color: white;
    }

    .textField {
        background-color: white;
        color: black;
        width: 180rem;
        height: 30rem;
        border-radius: 4rem;
        border-color: #ED1C24;
        text-align: center;
        margin-top: 25rem;
    }

    .btnCadastrar {
        background-color: #ED1C24;
        color: white;
        width: 100rem;
        height: 35rem;
        border-radius: 5rem;
        margin-top: 25rem; 
    }
</style>
<script>
    import HeaderCadastro from "@/components/HeaderCadastro.vue";

    export default {
        name: "CadastroPage",
        components: {
            HeaderCadastro
        },
        methods: {
            cadastrarUser() {
                if (this.usuario.login === "" || this.usuario.senha === "") {
                    alert("Todos os dados devem ser preenchidos.");
                } else {
                    if (this.usuario.senha != this.confSenha) {
                        alert("As senhas não coincidem.");
                    } else {
                        let user = this.$store.cadastrar(this.usuario);

                        if (user) {
                            alert("Usuário cadastrado com sucesso!");
                            
                            this.$navigator.navigate("/home", { clearHistory: true })
                        } else {
                            alert("Usuário já existe.");
                        }
                    }
                }
            }        
        },
        data() {
            return {
                usuario: {
                    login: "",
                    senha: ""
                },
                confSenha: ""
            }
        }
    }
</script>