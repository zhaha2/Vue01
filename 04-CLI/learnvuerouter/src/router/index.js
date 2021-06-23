import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')


const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    // 默认路径
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      // 元数据（描述数据的数据）
      title: 'Home'
    },
    name: 'Home',
    component: Home,
    // 路由嵌套
    children: [
      {
        // 默认路径
        path: '',
        redirect: 'news'
      },
      {
        // 注意子路由不加斜杠'/'
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ],
  },
  {
    path: '/about',
    meta: {
      title: 'About'
    },
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 传递参数方式一：动态路由
    path: '/user/:userId',
    meta: {
      title: 'User'
    },
    name: 'User',
    // 路由独享的守卫 
    beforeEnter : (to, from, next) => {
      console.log('User guard');
      next()
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: 'Profile'
    },
    name: 'Profile',
    component: Profile
  },
]


const router = new VueRouter({
  routes,
  // 从默认的url hash模式改为html5的history模式（不带#）
  mode: 'history',
  // 改所有outer-link的activeClass属性
  linkActiveClass: 'active',
})

// 全局导航守卫
// 前置守卫/前置钩子（hook，即回调）（在路由跳转之前回调）
router.beforeEach((to, from, next) => {
  // 监测路由跳转，从from的路由跳转到to的路由
  document.title = to.matched[0].meta.title
  // 调用next后，才能进入下一个钩子
  // 调用这个之前可以先做个判断之类的，看是否进行跳转
  next()
})
// 后置钩子
router.afterEach((to, from) => {
  // console.log('----');
}) 

export default router
