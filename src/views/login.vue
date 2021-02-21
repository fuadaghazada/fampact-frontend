<template>
    <form @submit.prevent="onSubmit" class="container d-flex flex-column justify-content-center">
        <h1>Login</h1>

        <label for="username">Username/Email</label>
        <input type="text" id="username" required v-model="username">

        <label for="password">Password</label>
        <input type="password" id="password" required v-model="password">

        <span v-if="error" class="p-2">{{error}}</span>

        <input type="submit" class="btn btn-primary mt-4">
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: '',
                error: null
            }
        },
        computed: {
            ...mapGetters('auth', ['authUser'])
        },
        methods: {
            ...mapActions('auth', ['login']),

            async onSubmit() {
                this.error = null;
                const requestData = {
                    username: this.username,
                    password: this.password
                };

                try {
                    await this['login'](requestData);
                    await this.$router.replace('/');
                } catch (e) {
                    this.error = e.message;
                }
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    form {
        margin-top: 15%;
    }
</style>
