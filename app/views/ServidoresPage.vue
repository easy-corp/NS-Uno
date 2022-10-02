<template>
    <Page class="app">
        <HeaderPadrao />

        <stackLayout class="layoutServer">
            <TextField class="textField" hint="IP" editable="true" /> 
            <TextField class="textField" hint="Porta" editable="true" /> 

            <Button class="btnServidor" text="Entrar no Servidor" @tap="servidor" />
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
            servidor() {
                alert("Entrando no servidor...");
            }
        }
    }
</script>