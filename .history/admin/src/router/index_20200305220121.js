import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEditor from '../views/CategoryEditor.vue'
import CategoryList from '../views/CategoryList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:"category/create",component:CategoryEditor},
      {path:"category/editor/:id",component:CategoryEditor,props:true},
      {path:"category/list",component:CategoryList},
     
      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
