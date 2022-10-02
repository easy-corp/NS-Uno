<template>
    <Page class="app">
        <HeaderClean />

        <stackLayout class="layoutHome">
            <Image class="imgUno" src="~/assets/img/Uno.png" stretch="fill" />

            <TextField v-model="usuario.login" class="textField" hint="Usuário" editable="true" /> 
            <TextField v-model="usuario.senha" class="textField" hint="Senha" editable="true" secure="true" /> 
            
            <Button class="btnEntrar" text="Entrar" @tap="logar" />
            <Button class="btnCadastro" text="Cadastre-se" @tap="cadastrar" />
        </StackLayout>
    </Page>
</template>
<style scoped lang="scss">
    .app {
        background-color: #ED1C24;
    }

    .imgUno {
        width: 320rem;
        height: 323rem;
        margin-top: 15rem;
        margin-bottom: 10rem;
    }

    .textField {
        background-color: white;
        color: black;
        width: 180rem;
        height: 30rem;
        border-radius: 4rem;
        text-align: center;
        margin-top: 25rem;
    }

    button {
        background-color: white;
        color: black;
        width: 100rem;
        height: 35rem;
        border-radius: 5rem;
        margin-top: 25rem;    
    }

    .btnEntrar {
        background-color: white;
        color: black;
        width: 90rem;
    }

    .btnCadastro {
        width: 110rem;
    }
</style>
<script>
    import HeaderClean from "@/components/HeaderClean.vue";

    export default {
        name: "HomePage",
        components: {
            HeaderClean
        },
        methods: {
            logar() {
                let localizado = this.$store.autenticar(this.usuario);
                
                if (localizado) {
                    alert("Login realizado com sucesso!");
                    
                    this.$navigator.navigate("/servidores", { clearHistory: true })
                } else {
                    alert("Usuário ou senha incorretos.");
                }                
            },
            cadastrar() {
                this.$navigator.navigate("/cadastro", { clearHistory: true })
            }
        },
        data() {
            return {
                usuario: {
                    login: "",
                    senha: ""
                }
            }
        }
    };    
</script>
