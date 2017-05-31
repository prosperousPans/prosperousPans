const db = require('../');
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const Login = db.Model.extend({
  tableName: 'login',
  users: function() {
    return this.belongsTo('users');
  }
});

module.exports = db.model('Login', Login);
