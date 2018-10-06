import Vue from 'vue'
//import App from './App.vue'
import ElementUI from 'element-ui'
import Calculator from './Calculator'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(Calculator)
}).$mount('#app')
