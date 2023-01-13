import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome, FaInbox, FaCoins, FaTrophy, FaStar, FaGraduationCap, FaDonate, FaCog, FaLock} from "oh-vue-icons/icons/fa";

addIcons(FaHome, FaInbox, FaCoins, FaTrophy, FaStar, FaGraduationCap, FaDonate, FaCog, FaLock);

const app = createApp(App)
app.component("icon", OhVueIcon);
app.use(router)
app.mount('#app')
