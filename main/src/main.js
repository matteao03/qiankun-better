import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#main')

const getActiveRule = hash => location => location.hash.startsWith(hash)

registerMicroApps([
  {
    name: 'data',
    entry: `//${location.hostname}:8082`,
    container: '#micro-apps',
    activeRule: getActiveRule('#/data'),
    props: { router }
  }
])

// 启动 qiankun
start()
