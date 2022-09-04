import axios from "axios";
import store from "./store";

const wikiAxios = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 3000,
});

wikiAxios.interceptors.request.use(
    (config) => {
        config.headers.post['Content-Type'] = 'application/json';
        config.headers.get['Content-Type'] = 'application/json';
        config.headers.put['Content-Type'] = 'application/json';

        const token = store.authModule.getters.getToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }
);

export default wikiAxios;