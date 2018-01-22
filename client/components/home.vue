<template>
    <div>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            message () { return this.$store.state.message; }
        }
    };
</script>

<style>

</style>