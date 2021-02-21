import axios from '../utils/plugins/axios';

export default {
    me: () => axios.get('auth/me/'),
    update: data => axios.patch('auth/me/', data),

    login: data => axios.post('auth/token/', data),
    logout: () => axios.post('auth/logout/'),

    register: data => axios.post('auth/register/', data),
    setPassword: (id, data, token) => axios.put(`auth/set_password/${id}/${token}/`, data),
    forgotPassword: data => axios.put('auth/forgot/', data),

    verifyUser: (id, data) => axios.put(`auth/verify/${id}/`, data)
}
