import {createStore} from "vuex";

import auth from "./modules/auth";
import account from "./modules/account";
import scoring from "./modules/scoring";
import task from "./modules/task";

export default createStore({
    modules: {
        auth,
        account,
        scoring,
        task
    }
})
