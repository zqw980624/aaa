import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEditor from '../views/CategoryEditor.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEditor from '../views/ItemEditor.vue'
import ItemList from '../views/ItemList.vue'

import HeroEditor from '../views/HeroEditor.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEditor from '../views/ArticleEditor.vue'
import ArticleList from '../views/ArticleList.vue'

import AdsEditor from '../views/AdsEditor.vue'
import AdsList from '../views/AdsList.vue'

import AdministratorEditor from '../views/AdministratorEditor.vue'
import AdministratorList from '../views/AdministratorList.vue'
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

      {path:"item/create",component:ItemEditor},
      {path:"item/editor/:id",component:ItemEditor,props:true},
      {path:"item/list",component:ItemList},

      {path:"hero/create",component:HeroEditor},
      {path:"hero/editor/:id",component:HeroEditor,props:true},
      {path:"hero/list",component:HeroList},

      {path:"article/create",component:ArticleEditor},
      {path:"article/editor/:id",component:ArticleEditor,props:true},
      {path:"article/list",component:ArticleList},

      {path:"ad/create",component:AdsEditor},
      {path:"ad/editor/:id",component:AdsEditor,props:true},
      {path:"ad/list",component:AdsList},

      {path:"administrator/create",component:AdministratorEditor},
      {path:"administrator/editor/:id",component:AdministratorEditor,props:true},
      {path:"administrator/list",component:AdministratorList},
     
      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
