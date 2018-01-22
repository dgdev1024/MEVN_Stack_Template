///
/// @file   store.js
/// @brief  Responsible for managing our application's state.
///

// Imports
import Vue from 'vue';
import Vuex from 'vuex';

// Let Vue know that we are using the Vuex Application State Manager.
Vue.use(Vuex);

// Create and export the store.
export default new Vuex.Store({
    // The application's state variables can be retrieved here, using
    // the 'this.$store.state' object. You are not allowed to directly modify
    // application state members directly. If you need to do that, you will need
    // to set up a mutator or action function. See the 'mutations' and 'actions' objects
    // below.
    state: {
        message: 'Hello, World!'
    },

    // Members of the application's state can be retrived via functions
    // found here, from the 'this.$store.getters' object.
    getters: {

    },

    // Members of the application's state must be modified using mutator
    // functions defined here, and invoked using the 'this.$store.commit' method,
    // passing the name of the mutator function as the first argument and a payload
    // as the second. Mutator functions must be synchronous. If you need to mutate
    // your application's state in an asynchronous fashion, you must dispatch an action
    // function. See the 'actions' segment for more.
    mutations: {

    },

    // If you need to modify the application's state in an asynchronous matter, you will
    // need to set up 'action' functions in the object below. These actions will be invoked
    // by using the 'this.$store.dispatch' method, which takes the name of the action function
    // as the first argument and a payload as the second.
    //
    // Action functions return a Promise, which can be used to run post-action operations, such
    // as changing route after a successful HTTP request.
    actions: {

    }
});