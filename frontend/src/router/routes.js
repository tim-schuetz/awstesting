export const routes = [
  {path: '/', redirect: '/startpage'},
  {path: '/startpage', component: ()=> import('@/views/startpage/index.vue')},
  {path: '/settings', component: ()=> import('@/views/settings/index.vue')}
]
