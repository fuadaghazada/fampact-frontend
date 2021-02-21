import axios from '../utils/plugins/axios';

export default {
    myFamily: () => axios.get('user/family/'),
    updateFamily: data => axios.patch('user/family/', data),

    addMember: data => axios.post('user/add_member/', data),
    addChild: data => axios.post('user/add_child/', data),
}
