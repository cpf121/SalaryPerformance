import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './pages/App.vue'
import router from './route'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
