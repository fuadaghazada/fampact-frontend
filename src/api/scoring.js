import axios from '../utils/plugins/axios';

export default {
    publicLeaderBoard: (params = {}) => axios.get('scoring/public_leader_board/', {params}),
    privateLeaderBoard: (params = {}) => axios.get('scoring/private_leader_board/', {params})
}
