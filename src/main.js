import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {  } from "oh-vue-icons/icons/fa";

addIcons();

const app = createApp(App).component("icon", OhVueIcon);
app.use(router)
app.mount('#app')
