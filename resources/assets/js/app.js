require('./bootstrap');

window.Vue = require('vue');

Vue.component('parallax', require('vue-parallaxy'));
Vue.component('icon', require('vue-awesome'));
Vue.use(require('vue-scrollto'))

const app = new Vue({
    el: '#app'
});
