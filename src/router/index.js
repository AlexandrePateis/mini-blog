import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostUser from '../views/PostUser.vue'
import CreateUser from '../views/CreateUser.vue'
import EditUser from '../views/EditUser.vue'
import CardUser from '../components/CardUser.vue'
import PostOfUser from '../views/PostOfUser'
import MakeAPost from '../views/MakeAPost'

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
    component: PostUser,
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
  {
    path: '/postuser/:id',
    name: 'postuser',
    component: PostOfUser,
    props: {default: true, sidebar: false}
  },
  {
    path: '/makeapost/:id',
    name: 'makeapost',
    component: MakeAPost,
    props: {default: true, sidebar: false}
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
