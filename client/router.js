import Vue from 'vue';
import Router from 'vue-router';

const Home =  (resolve) => require(['./components/home.vue'], resolve);
const About = (resolve) => require(['./components/about.vue'], resolve);

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})