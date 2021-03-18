import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { VueReCaptcha } from 'vue-recaptcha-v3'

const app = createApp(App)
app.use(VueReCaptcha, { siteKey: '6LfocYEaAAAAADQP9ZIvPEBOniCJe95wQA8OlMUD' })
app.mount('#app')