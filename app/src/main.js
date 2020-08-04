import Vue from 'vue'
import { Button, Select,Row,Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
Vue.use(Button).use(Select).use(Row).use(Col)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
