import TeamPage from '../pages/TeamPage.vue'
import Index from '../pages/Index.vue'
import UserPage from '../pages/UserPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import UserEditPage from '../pages/UserEditPage.vue'
import SearchResultPage from '../pages/SearchResultPage.vue'

const routes = [
    { path: '/', component: Index, meta: { title: '主页' } },
    { path: '/team', component: TeamPage, meta: { title: '队伍' } },
    { path: '/user', component: UserPage, meta: { title: '个人' } },
    { path: '/serach', component: SearchPage, meta: { title: '搜索' }  },
    { path: '/user/edit', component: UserEditPage, meta: { title: '编辑' }  },
    { path: '/user/list', component: SearchResultPage, meta: { title: '搜索' }  },
  ]

export default routes;