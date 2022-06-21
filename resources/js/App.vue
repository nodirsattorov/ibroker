<template>
    <test-comp></test-comp>
    <auth-modal :loggedIn="loggedIn"></auth-modal>
    <router-view></router-view>
</template>

<script>

import TestComp from './components/TestComp'
import AuthModal from './src/views/pages/auth/AuthModal'

export default {
    name: 'App',
    components: {
        TestComp,
        AuthModal,
    },
    data() {
        return {
            loggedIn: false,
        }
    },
}
</script>