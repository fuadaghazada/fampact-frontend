import axios from '../utils/plugins/axios';

export default {
    listTasks: (params = {}) => axios.get('task/tasks/', {params}),
    addTask: data => axios.post(`task/tasks/`, data),
    retrieveTask: id => axios.get(`task/tasks/${id}/`),
    updateTask: (id, data) => axios.patch(`task/tasks/${id}/`, data),
    deleteTask: id => axios.delete(`task/tasks/${id}/`),
    updateStatus: (id, status) => axios.put(`task/tasks/${id}/update_status/`, {status}),
}
