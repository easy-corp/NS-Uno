<template>
    <ActionBar id="header">
        <Label text="Uno" />
    </ActionBar>
</template>
<style>
    #header {
        background-color: #ED1C24;
    }
</style>
<script>
    export default {
        name: "headerClean",
        props: ["message"]
    }
</script>