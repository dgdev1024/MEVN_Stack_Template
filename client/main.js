///
/// @file   index.js
/// @brief  The entry point for our application's frontend.

// Imports
import Vue from 'vue';
import VRS from 'vuex-router-sync';
import Router from './router';
import Store from './store';
import App from './app.vue';

// Synchronize our Vue Router and Vuex Store objects.
VRS.sync(Store, Router);

// Create our Vue instance.
new Vue({
    el: '#app',                 // The DOM element in which our app will be placed. See 'index.html' in the project root.
    router: Router,             // Let the Vue instance know about our router.
    store: Store,               // Let the Vue instance know about our single source of truth.
    components: { App },        // Inject our main app component into the instance.
    template: '<app />'         // The HTML template to be injected into the above DOM element.
});