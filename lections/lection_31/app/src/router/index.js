import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import store from '@/store/'

console.log(store, 'store');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      auth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      auth: true
    }
  },    
  {
    path: '/contacts',
    component: Contacts,
    meta: {
      auth: true
    }
  }
]


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const isAuth = store.getters.getIsAuth;

  if (!to.meta.auth || isAuth) {
    next();
    return;
  }

  next('/') ;
});

export default router
