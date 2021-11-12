import axios from 'axios';

export default {
    signUp: (email, password) => {
        console.log(email, password)
        return axios.post('/api/signup', {
            email: email,
            password: password,
        })
    },
    LogIn: (email, password) => {
        console.log(email, password)
        return axios.post('/api/login', {
            email: email,
            password: password
        })
    },
    getUser: () => {
        return axios.get('/api/user')
    },
    saveMap: (email, map) => {
        return axios.put('/api/user_data', {
            email: email,
            maps: map
        })
    },
    isAuthenticated: () => {
        return axios.get('/api/user_data')
    },
    Logout: () => axios.get('/api/logout')}