import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const load = (...p )=> resolve => require([`@/${p[1] || 'page'}/${p[0]}.vue`], resolve)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { title: "login"},
      component: load('login'),
    },
    {
      path: '/admin',
      name: 'index',
      meta: { title: "index"},
      component: load('admin'),
      children:[
        {
          path: '/shouye',
          meta: { title: "shouye"},
          component: load('index')
        },
        {
          path: '/tongji',
          meta: { title: "tongji"},
          component: load('tongji')
        }, {
          path: '/wode',
          meta: { title: "wode"},
          component: load('wode')
        }
      ]
    },{
      path: '/moudlelist',
      name: 'moudlelist',
      meta: { title: "moudlelist"},
      component: load('moudlelist'),
    },{
      path: '/wghxq',
      name: 'wghxq',
      meta: { title: "wghxq"},
      component: load('wghxq'),
    },{
      path: '/test',
      name: 'test',
      meta: { title: "test"},
      component: load('test'),
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach(function (to, from, next) {
  next()
})

router.afterEach(function (to) {
})
export default router
