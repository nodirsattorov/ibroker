import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/auth',
        name: 'AuthModal',
        component: () => import('../views/pages/auth/AuthModal.vue'),
    },
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router