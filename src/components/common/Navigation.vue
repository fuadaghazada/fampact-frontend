<template>
    <nav id="sidebar">
        <div class="custom-menu">
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
            </button>
        </div>
        <div class="p-4 pt-5">
            <h1><a href="index.html" class="logo">FamPact</a></h1>
            <ul class=" list-unstyled components mb-5">
                <li>
                    <i class="sidebar-icon fas fa-user-circle"></i>
                    <router-link to="family_leader_board">Mənim profilim
                    </router-link>
                </li>
                <li>
                    <i class="sidebar-icon fas fa-calendar-alt"></i>
                    <router-link to="/">Planlama
                    </router-link>
                </li>
                <li>
                    <i class=" sidebar-icon fas fa-trophy"></i>
                    <router-link to="global_leader_board">Liderlər
                    </router-link>
                </li>
                <li>
                    <i class="sidebar-icon fas fa-sign-out-alt"></i>
                    <a @click="$emit('logout')">Çıxış</a></li>
            </ul>
            <div class="footer">
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>
