import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    redirect:"/home",
    children: [
      {
        path: '/personal',
        name: 'personal',
        component: () => import('../views/personal')
      },
      {
        path: '/mailList',
        name: 'mailList',
        component: () => import('../views/mailList')
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('../views/news')
      },
      {
        path: '/queryUser',
        name: 'queryUser',
        component: () => import('../views/queryUser')
      },
    ]
  },
  {
    path: "/info",
    name: "info",
    component: () => import('../views/userInfo')
  }
]

const router = new VueRouter({
  routes, mode: 'history',
})

router.beforeEach((to,form,next) =>{
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next()
    }
  }
})

export default router
