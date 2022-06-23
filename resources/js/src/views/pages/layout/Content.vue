<template>
    <!-- BEGIN: Content-->
        <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper">
                <div class="content">
                    <router-link to="/test" class="btn btn-flat-secondary text-dark">Go test</router-link>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    <!-- END: Content-->
</template>

