<template>
    <div>
        <h1 id="test">{{ message }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return { message: 'Hello, World!' };
        }
    };
</script>

<style lang="scss">
    h1 {
        text-align: center;

        &#test {
            font-style: italic;
            color: blue;
        }
    }
</style>
