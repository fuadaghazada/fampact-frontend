import api from "../../api";
import {
    GET_MY_FAMILY,
    UPDATE_MY_FAMILY,
    ADD_MEMBER_SUCCESS,
    ADD_CHILD_SUCCESS
} from "../types";

const state = {
    myFamily: null
};

const getters = {
    myFamily: state => state.myFamily
};

const actions = {
    async getMyFamily({commit}) {
        const response = await api.account.myFamily();
        commit(GET_MY_FAMILY, response.data);
    },
    async updateMyFamily({commit}, data) {
        const response = await api.account.updateFamily(data);
        commit(UPDATE_MY_FAMILY, response.data);
    },
    async addMember({commit}, data) {
        const response = await api.account.addMember(data);
        commit(ADD_MEMBER_SUCCESS, response.data);
    },
    async addChild({commit}, data) {
        const response = await api.account.addChild(data);
        commit(ADD_CHILD_SUCCESS, response.data);
    }
};

const mutations = {
    [GET_MY_FAMILY](state, response) {
        state.myFamily = response;
    },
    [UPDATE_MY_FAMILY](state, response) {
        state.myFamily = response;
    },
    [ADD_MEMBER_SUCCESS](state, response) {
        state.myFamily = {
            ...state.myFamily,
            members: [
                ...state.myFamily.members,
                response
            ]
        };
    },
    [ADD_CHILD_SUCCESS](state, response) {
        state.myFamily = {
            ...state.myFamily,
            members: [
                ...state.myFamily.members,
                response
            ]
        };
    },
};

export default { namespaced: true, state, getters, actions, mutations };
