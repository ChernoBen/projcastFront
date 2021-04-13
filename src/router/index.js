import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Edit from '../views/Edit.vue'
import axios from 'axios'

function adminAuth(to, from, next) {

  if (localStorage.getItem('token') != undefined) {
    var url = "https://ec5ed7937309.ngrok.io" 
    var req = {
      headers: {
        authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    //se passar pelo middleware entao user está autenticado
    axios.post(url+"/validate", {}, req).then(response => {

      console.log(response)
      next()

    }).catch(error => {

      console.log(error)
      next("/login")

    })

  } else {

    next("/login")
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    //middleware p/rota
    BeforeEnter: adminAuth
  },
  {
    path: '/admin/users/edit/:id',
    name: 'Edit',
    component: Edit,
    //middleware p/rota
    BeforeEnter: adminAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
