<template>
    <ActionBar id="headerPadrao">
        <GridLayout id="grid" columns="100, 100, 100">
            <Image row="0" col="0" id="icVoltar" src="~/assets/img/icVoltar.png" stretch="fill" @tap=voltar />
            
            <Label row="0" col="1" id="lblUno" text="Uno" />
        </GridLayout>
    </ActionBar>
</template>
<style>
    #headerPadrao {
        background-color: #ED1C24;
    }

    #lblUno {
        color: white;
    }

    #icVoltar {
        margin-left: -60rem; 
    }

    image {
        width: 40rem;
        height: 40rem;
        color: white;
    }
</style>
<script>
    export default {
        name: "headerPadrao",
        components: {
            
        },
        methods: {
            voltar() {
                this.$navigator.navigate("/home", { clearHistory: true })
            }
        }
    }
</script>