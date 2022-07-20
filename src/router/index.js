import { createRouter, createWebHistory } from 'vue-router'

import Wellcome from "../views/Wellcome.vue"
import Chat from "../components/Chat.vue"
import Login from "../components/Login.vue"

const routes = [
  {
    path:"/",
    name:"Wellcome",
    component:Wellcome,

  },
  {
    path:"/chat",
    name:"Chat",
    component:Chat,
    props:true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
