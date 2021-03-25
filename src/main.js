import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import router from './router'

const app = createApp(App).use(router)
app.use(VueReCaptcha, { siteKey: '6LfocYEaAAAAADQP9ZIvPEBOniCJe95wQA8OlMUD' })
app.mount('#app')
