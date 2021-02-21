import api from "../../api";
import {
    LOGIN_SUCCESS,
    AUTH_USER_SUCCESS,
    REGISTER_SUCCESS,
    SET_PASSWORD_SUCCESS,
    VERIFY_USER_SUCCESS
} from "../types";

const state = {
    authUser: null
};

const getters = {
    authUser: state => state.authUser,
    isAuth: state => !!state.authUser
};

const actions = {
    async register({commit}, data) {
        const response = await api.auth.register(data);
        commit(REGISTER_SUCCESS, response.data);
    },
    async login({commit, dispatch}, data) {
        const response = await api.auth.login(data);
        localStorage.setItem('fampact_access_token', response.data['access']);
        commit(LOGIN_SUCCESS, response);
        await dispatch('getAuthUser');
    },
    async getAuthUser({dispatch}) {
        if (localStorage.getItem('fampact_access_token')) {
            const response = await api.auth.me();
            dispatch('setAuthUser', response.data);
        }
    },
    async logout({commit}) {
        localStorage.removeItem('fampact_access_token');
        commit(AUTH_USER_SUCCESS, null);
        window.location.reload();
    },
    async sendVerification({commit}, data) {
        const response = await api.auth.forgotPassword(data);
        commit(LOGIN_SUCCESS, response.data);
    },
    async setPassword({commit},{token, data}) {
        localStorage.setItem('fampact_access_token', token);
        const response = await api.auth.setPassword(data, token);
        localStorage.removeItem('fampact_access_token');
        commit(SET_PASSWORD_SUCCESS, response);
    },
    async verifyUser({commit}, {token}) {
        localStorage.setItem('fampact_access_token', token);
        const response = await api.auth.verifyUser();
        commit(VERIFY_USER_SUCCESS, response);
        localStorage.removeItem('fampact_access_token');
        return Promise.resolve(response.data['verified_at'] != null);
    },
    setAuthUser({commit}, user) {
        commit(AUTH_USER_SUCCESS, user);
    },
};

const mutations = {
    [LOGIN_SUCCESS](state, response) {
        console.log(response['statusText']);
    },
    [REGISTER_SUCCESS](state, response) {
        console.log(response['statusText']);
    },
    [AUTH_USER_SUCCESS](state, authUser) {
        state.authUser = authUser;
    },
    [SET_PASSWORD_SUCCESS](state, response) {
        console.log(response['statusText']);
    },
    [VERIFY_USER_SUCCESS](state, response) {
        console.log(response['statusText']);
    }
};

export default { namespaced: true, state, getters, actions, mutations };
