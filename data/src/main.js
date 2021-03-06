import './public-path';
import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

let router = null;
let instance = null;

function render(props) {
  let container = '';
  if (props) {
    container = props.container;
  }

  router = new VueRouter({
    routes,
  });
  instance = new Vue({
    router,
    data() {
      return {
        parentRouter: props.router,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app-data') : '#app-data');
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('data app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}