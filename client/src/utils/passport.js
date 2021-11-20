import axios from 'axios';

export default {
    signUp: (email, password, name) => {
        console.log(email, password, name)
        return axios.post('/api/signup', {
            email: email,
            password: password,
            name: name,
            hasMaps: false,
            availableStyles: [
                ['./maps/whiteMap.json', "White", '/static/media/White.76514db7.png'], 
                ['./maps/blueMap.json', "Blue", '/static/media/Blue.b801fdc3.png'],
                ['./maps/secondMapStyle.json', "Orange", '../maps/images/Orange.png'],
                ['./maps/yellowSeasMap.json', "Yellow Seas", '../maps/images/YellowSeas.png'],
                ['./maps/blackWhiteMap.json', "Black and White", '../maps/images/blackWhite.png'],
                ['./maps/greenMap.json', "Green", '../maps/images/green.png'],
                ['./maps/lilacMap.json', "Lilac", '../maps/images/lilac.png'],
                ['./maps/redMap.json', "Red", '../maps/images/redMap.png']
           ]
          
        })
    },
    LogIn: (email, password) => {
        console.log(email, password)
        console.log(axios.post('/api/login').then(axios.get('/api/user_data')))

        return axios.post('/api/login', {
            email: email,
            password: password,
        })
    },
    getUser: () => {
        console.log(axios.get('/api/user_data'))
        return axios.get('/api/user_data')
    },
    
    saveMap: (id, newMap, mapToDelete) => {
        console.log("I'm putting!", id, newMap, mapToDelete)
        return axios.put('/api/user_data', {
        _id: id,
        maps: newMap,
        mapToDelete: mapToDelete
        }

        )
    },
    saveDestination: (id, marker) => {
        console.log("marker!!")
        return axios.put('api/user_data', {
            _id: id,
            markers: marker
        })
    },
    saveComment: (id, newComment) => {
        console.log("newComment")
        return axios.put('api/user_data', {
            _id: id,
            comment: newComment
        })
    },

    isAuthenticated: () => {
        return axios.get('/api/user_data')
    },
    Logout: () => axios.get('/api/logout')}