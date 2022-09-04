import { createStore } from "vuex";

const authModule = createStore({
    state: {
        token: ""
    },
    getters: {
        getToken(state) {
            return state.token;
        }
    },
    mutations: {
        setToken(state, value) {
            state.token = value;
        }
    }
});

export default authModule;