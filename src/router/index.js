export default {
  routes: [
    {
      path: '/',                //默认路由
      name: 'index',
      component (resolve) {
        require(['../components/index/index'], resolve)
      }
    },
    {
      path: '/index/:city',
      name: 'index',
      component (resolve) {
        require(['../components/index/index'], resolve)
      }
    },
    {
      path: '/newHouse/:city',
      name: 'newHouse',
      component (resolve) {
        require(['../components/newHouse/newHouse'], resolve)
      }
    },
    {
      path: '/ershou/:city',
      name: 'ershou',
      component (resolve) {
        require(['../components/ershou/ershou'], resolve)
      }
    },
    {
      path: '/newsHome/:city',
      name: 'newsHome',
      component (resolve) {
        require(['../components/newsHome/newsHome'], resolve)
      }
    },
    {
      path: '/newHouseDetail/:city/:id',
      name: 'newHouseDetail',
      component (resolve) {
        require(['../components/newHouseDetail/newHouseDetail'], resolve)
      }
    },
    {
      path: '/oldHouseDetail/:city/:id',
      name: 'oldHouseDetail',
      component (resolve) {
        require(['../components/oldHouseDetail/oldHouseDetail'], resolve)
      }
    },
    {
      path: '/newsHomeDetail/:city/:id',
      name: 'newsHomeDetail',
      component (resolve) {
        require(['../components/newsHomeDetail/newsHomeDetail'], resolve)
      }
    }
  ],
  linkActiveClass: 'is-active'
}