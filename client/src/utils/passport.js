import axios from 'axios';

export default {
    signUp: (email, password, name) => {
        console.log(email, password, name)
        return axios.post('/api/signup', {
            email: email,
            password: password,
            name: name,
            hasMaps: false
        })
    },
    LogIn: (email, password) => {
        console.log(email, password)
        return axios.post('/api/login', {
            email: email,
            password: password,
        })
    },
    getUser: () => {
        return axios.get('/api/user_data')
    },
    
    saveMap: (id, newMap) => {
        console.log("I'm putting!")
        return axios.put('/api/user_data', {
        _id: id,
        maps: newMap}

        )
    },
    saveDestination: (id, marker) => {
        return axios.put('api/user_data', {
            _id: id,
            markers: marker
        })
    },
    isAuthenticated: () => {
        return axios.get('/api/user_data')
    },
    Logout: () => axios.get('/api/logout')}