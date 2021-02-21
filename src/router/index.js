import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        components: require('../components/layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/HelloWorld'),
            }
        ]

    },
    // ...authRoutes,
    // ...doctorRoutes,
    // ...userRoutes,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// router.beforeEach(async (to, from, next) => {
//     await store.dispatch('auth/getAuthUser');
//
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         try {
//             if (!store.getters['auth/isAuth']) {
//                 next({path: '/auth/login'});
//             } else {
//                 next();
//             }
//         } catch (e) {
//             console.log('No auth user');
//         }
//     } else {
//         next();
//     }
// });

export default router;
