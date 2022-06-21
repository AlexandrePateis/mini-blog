import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostUser from '../views/PostUser.vue'
import CreateUser from '../views/CreateUser.vue'
import EditUser from '../views/EditUser.vue'
import CardUser from '../components/CardUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: CardUser
  },
  {
    path: '/post',
    name: 'post',
    component: PostUser
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditUser,
    props: {default: true, sidebar: false}
  },
  {
    path: '/cadastro',
    name: 'create',
    component: CreateUser
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
