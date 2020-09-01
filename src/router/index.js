import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index.vue'
import home from '@/components/home.vue'
import user from '@/views/user/index.vue'
import page from '@/views/pagepractice/index.vue'
import music from '@/views/music/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/musicPlayer',
      name: 'music',
      component: music
    }
  ]
})
