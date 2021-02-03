import axios from 'axios'
import store from '../store'


const api = axios.create({
    baseURL: 'http://localhost:3333'
})

api.interceptors.request.use((config) => {
    const { token } = store.getState().auth
    const { active: group } = store.getState().groups;

    const headers = { ...config.headers }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    if (group) {
        headers.GROUP = group.name_slug;
    }

    return { ...config, headers }
})

export default api;