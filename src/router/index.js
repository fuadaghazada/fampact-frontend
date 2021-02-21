import {createRouter, createWebHistory} from "vue-router";
import store from '../store';


const routes = [
    {
        path: '/',
        name: 'home',
        components: require('../components/layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/tasks'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        components: require('../components/layouts/AuthLayout'),
        children: [
            {
                path: '',
                name: 'login',
                component: () => import('../views/login'),
            }
        ]
    },
    {
        path: '/family_leader_board',
        name: 'family_leader_board',
        components: require('../components/layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'family_leader_board',
                component: () => import('../views/famLeaderboard'),
            }
        ]
    },
    {
        path: '/global_leader_board',
        name: 'global_leader_board',
        components: require('../components/layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'global_leader_board',
                component: () => import('../views/globalLeaderboard'),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to, from, next) => {
    await store.dispatch('auth/getAuthUser');

    next();
});

export default router;
