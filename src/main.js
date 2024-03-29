import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(store);
app.use(router)
app.use(VueSweetalert2)
app.use(VueHead)
app.mount('#app')
    // createApp(App).use(store).use(router).mount('#app')