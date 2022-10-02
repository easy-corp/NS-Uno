<template>
    <Page class="app">
        <HeaderPadrao />

        <stackLayout class="layoutServer">
            <TextField v-model="servidor.ip" class="textField" hint="IP" editable="true" /> 
            <TextField v-model="servidor.porta" class="textField" hint="Porta" editable="true" /> 

            <Button class="btnServidor" text="Entrar no Servidor" @tap="conectarServidor" />
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

    .btnServidor {
        background-color: #ED1C24;
        color: white;
        width: 140rem;
        height: 35rem;
        border-radius: 5rem;
        margin-top: 25rem; 
    }
</style>
<script>
    import HeaderPadrao from '~/components/HeaderPadrao.vue';

    export default {
        name: "ServidoresPage",
        components: {
            HeaderPadrao
        },
        methods: {
            conectarServidor() {
                if (this.servidor.ip === "" || this.servidor.porta === "") {
                    alert("Todos os dados devem ser preenchidos.");
                } else {
                    alert("Entrando no servidor " + this.servidor.ip + "...");
                }
            }
        },
        data() {
            return {
                servidor: {
                    ip: "",
                    porta: ""
                }
            }
        }
    }
</script>