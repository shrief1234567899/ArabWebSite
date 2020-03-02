require('./bootstrap');
import Vue from 'vue';
import Routes from '@/js/routes.js';
import App from '@/js/views/App';
import VueInternationalization from 'vue-i18n';
import messages from '@/js/messages.js';
import VueLazyload from 'vue-lazyload'

window.Vue = require('vue');
window.JQuery = require('jquery');
Vue.use(VueInternationalization);
Vue.use(require('vue-moment'));
Vue.use(VueLazyload)

const i18n = new VueInternationalization({
    locale: 'en',
    messages
});

const app = new Vue({
    el: '#app',
    i18n,
    router: Routes,
    render: h => h(App),
});


export default App;
