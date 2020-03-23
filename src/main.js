import Vue from 'vue'
import App from './App.vue'
import login from './components/login.vue'
import HelloWorld from './components/HelloWorld.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import mypage from './components/myPage'
import task from './components/tasks'
import edit from './components/edit-profile.vue'
import signout from './components/signout.vue'
import deleted from './components/deleted.vue'
Vue.config.productionTip = false

const routes = [
  {
    path:'/delete',
    component:deleted
  },
  {
    path:'/signout',
    component:signout
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/signup',
    component :HelloWorld
  },  {
    path:'/profile',
    component:mypage
  },  {
    path:'/edit',
    component:edit
  },
  {
    path:'/tasks',
    component:task
  }
]

const router = new VueRouter({
  routes
});


Vue.use(BootstrapVue);
Vue.use(VueRouter)
new Vue({
router,  render: h => h(App),
}).$mount('#app')
