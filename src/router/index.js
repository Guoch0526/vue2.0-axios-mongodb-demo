import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import newHouse from '@/components/newHouse/newHouse'
import ershou from '@/components/ershou/ershou'
import newsHome from '@/components/newsHome/newsHome'
import newHouseDetail from '@/components/newHouseDetail/newHouseDetail'
import oldHouseDetail from '@/components/oldHouseDetail/oldHouseDetail'
import newsHomeDetail from '@/components/newsHomeDetail/newsHomeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',                //默认路由
      name: 'index',
      component: index
    },
    {
      path: '/index/:city',
      name: 'index',
      component: index
    },
    {
      path: '/newHouse/:city',
      name: 'newHouse',
      component: newHouse
    },
    {
      path: '/ershou/:city',
      name: 'ershou',
      component: ershou
    },
    {
      path: '/newsHome/:city',
      name: 'newsHome',
      component: newsHome
    },
    {
      path: '/newHouseDetail/:city/:id',
      name: 'newHouseDetail',
      component: newHouseDetail
    },
    {
      path: '/oldHouseDetail/:city/:id',
      name: 'oldHouseDetail',
      component: oldHouseDetail
    },
    {
      path: '/newsHomeDetail/:city/:id',
      name: 'newsHomeDetail',
      component: newsHomeDetail
    }
  ],
  linkActiveClass: 'is-active'
})
