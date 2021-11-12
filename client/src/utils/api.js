import axios from 'axios';

export default {

saveUser: function (email, password) {
    console.log(email, password)
    return axios.post('/api/users', {
        // name: name, 
        email: email, 
        password: password, 
        // location: {
        //     lat: latitude,
        //     lng: longitude
        // }
    });
  },
  getUser: function (email) {
    console.log(email)
    return axios.get('/api/users/aupert.laura@gmail.com', {email: email});
  },
  setLocation: function (name, latitude, longitude) {
    return axios.put("/api/friends", 
    { name: name , 
     latitude: latitude,
     longitude: longitude })
  },
  geocode: function(address) {
    return axios.get(
      "http://api.positionstack.com/v1/forward?access_key=" + process.env.REACT_APP_GEOKEY +
      "&query=" + address 
      )
  },
  getFriend: function (search) {
    return axios.get('/api/friends', search);
  },

}


