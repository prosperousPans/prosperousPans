const axios = require('axios');

let query = '';
axios.get('http://localhost:3000/populate-full-graphDB')
  .then(function (response) {
    module.exports.query = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
