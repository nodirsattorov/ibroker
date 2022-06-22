<template>
    <Header :loggedIn="loggedIn"/>
    <MainMenu />
    <auth-modal @loggedIn="authStatus" :loggedIn="loggedIn"></auth-modal>
    <router-view></router-view>
    <Content />
    <Footer />
</template>

<script>

import TestComp from './components/TestComp'
import AuthModal from './src/views/pages/auth/AuthModal'
import Header from './src/views/pages/layout/Header'
import MainMenu from './src/views/pages/layout/MainMenu'
import Content from './src/views/pages/layout/Content'
import Footer from './src/views/pages/layout/Footer'

export default {
    name: 'App',
    components: {
        TestComp,
        AuthModal,
        Header,
        MainMenu,
        Content,
        Footer,
    },
    data() {
        return {
            loggedIn: false,
        }
    },
    methods: {
        authStatus(status){
            this.loggedIn = status;
        }
    },
}
</script>