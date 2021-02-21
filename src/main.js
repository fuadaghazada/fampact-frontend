import { createApp } from 'vue';
import mitt from 'mitt';

// Styles & Scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Store, Mixins & Plugins
import store from './store'
import i18n from "./utils/plugins/i18n";
import base from "./utils/mixins/base";

import router from "./router";
import App from './App.vue';

const app = createApp(App);

// Store
app.use(store);

// Plugins
app.use(i18n);
app.use(global);

// Router
app.use(router);

// Event dispatcher
app.config.globalProperties.$emitter = mitt();

// Mixins
app.mixin(base);

app.mount('#app');
