import Vue from 'vue';
import Router from './router';
import App from './app.vue';

new Vue({
    el: '#app',
    router: Router,
    components: { App },
    template: '<app />'
});