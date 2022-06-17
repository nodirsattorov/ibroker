require('./bootstrap');

import { createApp } from 'vue'
import TestComp from './components/TestComp'
import LoginModal from './src/views/pages/auth/LoginModal'
import RegisterModal from './src/views/pages/auth/RegisterModal'
import ForgotPasswordModal from './src/views/pages/auth/ForgotPasswordModal'

const app = createApp({})
app.component('test-comp', TestComp)
app.component('login-modal', LoginModal)
app.component('register-modal', RegisterModal)
app.component('forgot-password-modal', ForgotPasswordModal)

app.mount('#app')


