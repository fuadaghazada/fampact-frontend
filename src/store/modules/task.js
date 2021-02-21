import api from "../../api";
import {
    LIST_TASKS,
    RETRIEVE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    UPDATE_TASK_STATUS
} from "../types";

const state = {
    tasks: []
};

const getters = {
    tasks: state => state.tasks
};

const actions = {
    async listTasks({commit}, params = {}) {
        const response = await api.task.listTasks(params);
        commit(LIST_TASKS, response.data);
    },
    async retrieveTask({commit}, {id}) {
        const response = await api.task.retrieveTask(id);
        commit(RETRIEVE_TASK, response.data);
    },
    async updateTask({commit}, {id, data}) {
        const response = await api.task.updateTask(id, data);
        commit(UPDATE_TASK, response.data);
    },
    async deleteTask({commit}, {id}) {
        const response = await api.task.deleteTask(id);
        commit(DELETE_TASK, response.data);
    },
    async updateStatus({commit}, {id}) {
        const response = await api.task.updateTask(id);
        commit(UPDATE_TASK_STATUS, response.data);
    }
};

const mutations = {
    [LIST_TASKS](state, response) {
        state.tasks = response.results;
    },
    [RETRIEVE_TASK](state, response) {
        console.log(response['statusText']);
    },
    [UPDATE_TASK](state, response) {
        console.log(response['statusText']);
    },
    [DELETE_TASK](state, response) {
        console.log(response['statusText']);
    },
    [UPDATE_TASK_STATUS](state, response) {
        console.log(response['statusText']);
    }
};

export default { namespaced: true, state, getters, actions, mutations };
