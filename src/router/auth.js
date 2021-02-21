import store from "../store";


export default [
    {
        path: '/auth',
        name: 'auth',
        components: require('../components/layouts/ContainerLayout'),
        children: [
            // {
            //     path: 'login',
            //     name: 'login',
            //     component: () => import('../views/auth/Login')
            // },
            // {
            //     path: 'register',
            //     name: 'register',
            //     component: () => import('../views/auth/Register')
            // },
            // {
            //     path: 'forgot_password',
            //     name: 'forgot_password',
            //     component: () => import('../views/auth/ForgotPassword')
            // },
            // {
            //     path: 'reset_password/:token',
            //     name: 'reset_password',
            //     component: () => import('../views/auth/ResetPassword')
            // },
            // {
            //     path: 'verify_user/:token',
            //     name: 'verify_user',
            //     component: () => import('../views/auth/Verification')
            // }
        ],
        async beforeEnter(to, from, next) {
            if (store.getters['auth/isAuth']) {
                next({path: '/'});
            } else {
                next();
            }
        }
    },
]
