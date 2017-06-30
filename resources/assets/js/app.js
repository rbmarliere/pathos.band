require('./bootstrap');
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

window.Vue = require('vue');

Vue.component('parallax', require('vue-parallaxy'));
Vue.component('icon', require('vue-awesome'));
Vue.use(require('vue-scrollto'))
Vue.use(require('vue-lazyload'))
Vue.use(require('vue-touch'), { name: 'v-touch' })
Vue.component('lightbox', require('vue-image-lightbox'));
Vue.component('photos', require('./components/Photos.vue'));
Vue.component('artwork', require('./components/Artwork.vue'));

const app = new Vue({
    el: '#app'
});
