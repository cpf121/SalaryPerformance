const routes = [
  { path: '/', component: () => import('../pages/Home/index.vue') },
  { path: '/Login', name: 'login', component: () => import('../pages/Login/Login.vue') }
]
export default routes
