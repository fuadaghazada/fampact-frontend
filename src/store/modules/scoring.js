import api from "../../api";
import {
    GET_PUBLIC_LEADER_BOARD,
    GET_PRIVATE_LEADER_BOARD,
} from "../types";

const state = {
    families: [],
    familyMembers: []
};

const getters = {
    families: state => state.families,
    familyMembers: state => state.familyMembers,
};

const actions = {
    async publicLeaderBoard({commit}, params = {}) {
        const response = await api.scoring.publicLeaderBoard(params);
        commit(GET_PUBLIC_LEADER_BOARD, response.data);
    },
    async privateLeaderBoard({commit}, params = {}) {
        const response = await api.scoring.privateLeaderBoard(params);
        commit(GET_PRIVATE_LEADER_BOARD, response.data);
    }
};

const mutations = {
    [GET_PUBLIC_LEADER_BOARD](state, response) {
        state.families = response.results;
    },
    [GET_PRIVATE_LEADER_BOARD](state, response) {
        state.familyMembers = response.results;
    },
};

export default { namespaced: true, state, getters, actions, mutations };
