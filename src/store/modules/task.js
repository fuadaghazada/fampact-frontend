import api from "../../api";
import {
    ADD_TASK,
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
    async addTask({commit}, {data}) {
        const response = await api.task.addTask(data);
        commit(ADD_TASK, response.data);
    },
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
    async updateStatus({commit}, {id, status}) {
        const response = await api.task.updateStatus(id, status);
        commit(UPDATE_TASK_STATUS, response.data);
    }
};

const mutations = {
    [ADD_TASK](state, response) {
        console.log(response['statusText']);
    },
    [LIST_TASKS](state, response) {
        state.tasks = response.results
            .map(data => ({
                id: data.id,
                member_name: data['assigned_to'] ? data['assigned_to']['first_name'] : data['created_by']['first_name'],
                title: data.title,
                deadline: data.deadline,
                status: data.status.toLowerCase()
            }));
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
