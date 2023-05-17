import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// fontawesome icons config
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

// bootstrap config
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './styles.css' // main css file

const app = createApp(App)

app.use(router)
app.mount('#app')
