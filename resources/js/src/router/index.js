import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/login',
        name: 'LoginModal',
        component: () => import('../views/pages/auth/LoginModal.vue'),
    },
    {
        path: '/register',
        name: 'RegisterModal',
        component: () => import('../views/pages/auth/RegisterModal.vue'),
    },
    {
        path: '/forgot-password',
        name: 'ForgotPasswordModal',
        component: () => import('../views/pages/auth/ForgotPasswordModal.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router