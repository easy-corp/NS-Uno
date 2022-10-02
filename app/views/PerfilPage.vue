<template>
    <Page class="app">
        <HeaderPadrao />

        <GridLayout class="gridPerfil" columns="150, 150" rows="200">
            <Image row="0" col="0" id="imgPerfil" src="~/assets/img/perfil.png" stretch="fill" />
            
            <stackLayout row="0" col="1" class="layoutPerfil">
                <Label class="lblNome" text="Luis Felipe" />
                <Label text="8 Jogos" />
                <Label text="5 Vitórias" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>
<style scoped lang="scss">
    .app {
        background-color: white;
    }

    .gridPerfil {
        align-content: center;
        margin-left: 60rem;
    }
    
    .layoutPerfil {
        margin-top: 50rem;
        margin-left: 20rem;
    }

    #imgPerfil {
        width: 140rem;
        height: 140rem;
    }

    Label {
        color: #ED1C24;
        font-size: 15rem;
    }

    .lblNome {
        font-size: 20rem;
    }
</style>
<script>
    import HeaderPadrao from '~/components/HeaderPadrao.vue';

    export default {
        name: "PerfilPage",
        components: {
            HeaderPadrao
        },
        methods: {
            
        }
    }
</script>