import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoriesEditor from '../views/CategoriesEditor.vue'
import CategoryList from '../views/CategoryList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:"category/create",component:CategoriesEditor},
      {path:"category/list",component:CategoryList},
      {path:"category/editor/:id",component:CategoriesEditor,props:true},
      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
