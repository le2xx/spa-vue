import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'

Vue.use(VueResource)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Hello,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
  ]
 })

new Vue({
  el: '#app',
  render: h => h(App)
})
