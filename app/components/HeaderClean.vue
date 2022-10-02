<template>
    <ActionBar id="header">
        <Label id="lblUno" text="Uno" />
    </ActionBar>
</template>
<style>
    #header {
        background-color: #ED1C24;
    }

    #lblUno {
        color: white;
    }
</style>
<script>
    export default {
        name: "headerClean",
        props: ["message"]
    }
</script>