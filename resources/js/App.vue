<template>
    xxxx
    <test-comp></test-comp>
   <login-modal></login-modal>
   <register-modal></register-modal>
   <forgot-password-modal></forgot-password-modal>
    <router-view></router-view>
</template>

<script>

import TestComp from './components/TestComp'
import LoginModal from './src/views/pages/auth/LoginModal'
import RegisterModal from './src/views/pages/auth/RegisterModal'
import ForgotPasswordModal from './src/views/pages/auth/ForgotPasswordModal'

export default {
    name: 'App',
    components: {
        TestComp,
        LoginModal,
        RegisterModal,
        ForgotPasswordModal
    }
}
</script>