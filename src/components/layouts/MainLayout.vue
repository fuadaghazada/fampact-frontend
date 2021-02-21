<template>
    <div class="wrapper d-flex align-items-stretch">
        <navigation
                @logout="onLogout"
        />
        <router-view />
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import Navigation from "../common/Navigation";

    export default {
        name: "MainLayout",
        components: {
            Navigation
        },
        methods: {
            ...mapActions('auth', ['logout']),

            async onLogout() {
                await this.$router.replace('/login');
                await this['logout']();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
