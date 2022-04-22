import Vue from 'vue'
import App from './App.vue'
import 'swiper/css/swiper.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
Vue.component('MyHeader',MyHeader)
Vue.component('MyFooter',MyFooter)
Vue.config.productionTip = false


// 图片懒加载插件引入
import VueLazyload from 'vue-lazyload'
// 引入图片
import gif from './static/others/loading.gif'
Vue.use(VueLazyload,{
    loading: gif,
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
