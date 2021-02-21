import axios from '../utils/plugins/axios';

export default {
    listTasks: (params = {}) => axios.get('task/tasks/', {params}),
    retrieveTask: id => axios.get(`task/tasks/${id}/`),
    updateTask: (id, data) => axios.patch(`task/tasks/${id}/`, data),
    deleteTask: id => axios.delete(`task/tasks/${id}/`),
    updateStatus: (id, status) => axios.delete(`task/tasks/${id}/`, {data: {status}}),
}
