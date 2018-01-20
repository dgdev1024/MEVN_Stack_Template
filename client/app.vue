<template>
    <div id="app">
        <ul>
            <router-link to="/">Home</router-link>
        </ul>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app'
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
