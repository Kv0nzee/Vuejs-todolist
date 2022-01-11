import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import editProject from '../views/editProject.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddProject',
    name: 'AddProject',
    component: AddProject
  },{
    path: '/editProject/:id',
    name: 'editProject',
    component: editProject,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
