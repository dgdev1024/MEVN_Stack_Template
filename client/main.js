///
/// @file   index.js
/// @brief  The entry point for our application's frontend.

// Imports
import Vue from 'vue';
import Router from './router';
import App from './app.vue';

// Create our Vue instance.
new Vue({
    el: '#app',                 // The DOM element in which our app will be placed. See 'index.html' in the project root.
    router: Router,             // Let the Vue instance know about our router.
    components: { App },        // Inject our main app component into the instance.
    template: '<app />'         // The HTML template to be injected into the above DOM element.
});