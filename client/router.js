///
/// @file   router.js
/// @brief  Sets up our application's client-side routing.
///

// Imports
import Vue from 'vue';
import Router from 'vue-router';

// Don't import our components right away. Import them only when needed.
// This tells Webpack to run code splitting when compiling the frontend,
// which will help with website loading times.
const Home =  (resolve) => require(['./components/home.vue'], resolve);

// Let Vue know that we are using the Vue Router.
Vue.use(Router);

// Create and export our Router object.
export default new Router({
    // Use the HTML5 history API for our history mechanism. The fallback
    // route created by the Express app on the server-side will make sure our
    // client-side routes load properly.
    mode: 'history',

    // Our routes.
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})